import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EventCard = ({ id, title, image }) => (
  <div className="card">
    <Link href={`/events/${id}`} passHref>
      <div>
        <Image src={image} alt={title} width={500} height={500} />
        <h2>{title}</h2>
      </div>
    </Link>
  </div>
);

const AllEvents = ({ data }) => (
  <div className="events_page">
    {data?.map((ev) => (
      <EventCard key={ev.id} id={ev.id} title={ev.title} image={ev.image} />
    ))}
  </div>
);

export default AllEvents;
