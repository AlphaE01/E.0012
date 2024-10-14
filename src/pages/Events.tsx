import React from 'react';

// This is a placeholder for the events data. In a real application, this would be fetched from an API.
const events = [
  {
    id: 1,
    name: 'Engineering Innovation Workshop',
    date: '2024-04-15',
    location: 'Taylor\'s University ADP Campus',
    description: 'Join us for a hands-on workshop exploring the latest innovations in engineering.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: 2,
    name: 'Industry Talk: Future of Robotics',
    date: '2024-05-01',
    location: 'Virtual Event',
    description: 'Learn about the future of robotics from leading industry experts.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  // Add more events as needed
];

const EventCard: React.FC<{ event: typeof events[0] }> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
        <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-gray-600 mb-4">{event.location}</p>
        <p className="text-gray-700 mb-4">{event.description}</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
          Register
        </button>
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;