import CatEvent from '../../../src/components/events/catEvent';

const EventsCatPage = ({ data, pageName }) => <CatEvent data={data} pageName={pageName} />;

export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json');  //import the data file comes  in 1st
  const allPaths = events_categories.map((ev) => {                //tell "next" all your specifi pages nid what data
    return {
      params: {
        cat: ev.id.toString(),      // give to 'next' know i want id give back to me 
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,         //tell nxt all path (specifi page url) respon back correct data 
    fallback: false,         // if type another unknow url example 123 dint record at datafile , will show 404 error for clients
  };
}
//this componnet is tell next how many specifi sub page 
//those sub page will get data from data file and show up
//this function hepl u no nid repeat create file for each sub page
//example : each place have 1 (but have 10 place , is nid create 10 file )
//so this function is just wrtie 1 time can handle all specifi pages



export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat; //stracure parameter (get u nid param at data file)
  const { allEvents } = await import('/data/data.json'); //tell 'nxt' get data at datafile

  const data = allEvents.filter((ev) => ev.city === id); //get id and city show up the route

  return { props: { data, pageName: id } }; //than 'nxt' will get the data u nid show up to route
}


//example now url type events/barcelona = will show up all event data barcelona 
//all specifi page will show specifi data 对应起来

// this dynamic pages we nid to use getstaicpath and getstaticProps, getStaticPath function to certainfy how many path is u nid
//if static page is just only use getStaticProps , its just ok already
