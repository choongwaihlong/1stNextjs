import AllEvents from '../../src/components/events/events-page';

const EventsPage = ({ data }) => {
  return <AllEvents data={data} />;
};

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
//getstaticProps is get data at events_categorios (data file) than show up to page
