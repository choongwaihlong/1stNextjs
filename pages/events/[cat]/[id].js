import SingleEvent from '../../../src/components/events/single-event';

const EventPage = ({ data }) => <SingleEvent data={data} />;

export default EventPage;

export async function getStaticPaths() {
  const data = await import('/data/data.json'); // get data from datafile
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) => {        // create map tells next what params u nid to show up
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {                       
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import('/data/data.json');
  const eventData = allEvents.find((ev) => id === ev.id);   //抽取相应的data 和显示对应的url example : event/barcelona/party-barcelona
                                                            

  return {
    props: { data: eventData },
  };
}

//this is single event pages 