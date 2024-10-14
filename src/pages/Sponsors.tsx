import React from 'react';

// This is a placeholder for the sponsors data. In a real application, this would be fetched from an API.
const sponsors = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://via.placeholder.com/150',
    description: 'Leading technology solutions provider supporting innovation in engineering education.'
  },
  {
    id: 2,
    name: 'EngiTech',
    logo: 'https://via.placeholder.com/150',
    description: 'Pioneering engineering firm committed to nurturing future talent.'
  },
  // Add more sponsors as needed
];

const SponsorCard: React.FC<{ sponsor: typeof sponsors[0] }> = ({ sponsor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={sponsor.logo} alt={sponsor.name} className="w-full h-32 object-contain" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
        <p className="text-gray-700">{sponsor.description}</p>
      </div>
    </div>
  );
};

const Sponsors: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Sponsors</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Sponsor Us?</h2>
        <p className="text-lg mb-4">
          By sponsoring the Engineering Society, you gain access to a talented pool of future engineers, 
          brand exposure within the university, and the opportunity to shape the next generation of innovators.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {sponsors.map(sponsor => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Become a Sponsor</h2>
        <p className="text-lg mb-4">
          Interested in sponsoring our society? We'd love to hear from you!
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Contact Us for Sponsorship
        </a>
      </div>
    </div>
  );
};

export default Sponsors;