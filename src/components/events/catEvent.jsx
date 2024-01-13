import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ id, city, title, image, description }) => (
  <div className="card">
    <Link href={`/events/${city}/${id}`} passHref>
      <div>
        <Image width={300} height={300} alt={title} src={image} />
        
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  </div>
);

const CatEvent = ({ data, pageName }) => (
  <div className="cat_events">
    <h1> Events in {pageName} </h1>

    <div className="content">
      {data.map((ev) => (
        <EventCard
          key={ev.id}
          id={ev.id}
          city={ev.city}
          title={ev.title}
          image={ev.image}
          description={ev.description}
        />
      ))}
    </div>
  </div>
);

export default CatEvent;


//This component CatEvent is a stateless component that takes two props: data and pageName. It is responsible for 
//rendering a list of events and displaying information about the events in a card format.

//The component displays a title using an h1 element with text 'Events in' and pageName passed as a prop. 
//The component maps over the data prop and for each event, it creates a link component that takes the user to 
//a page that shows more details about the event. The link component has an a element with class name card which is 
//styled to look like a card. Inside the a element, there is an Image component from the next/image library, which displays
//an image of the event with the specified width, height, and alt text. The component also displays the title and description
//of the event in h2 and p elements, respectively.