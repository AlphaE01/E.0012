import React from 'react';

// This is a placeholder for the team data. In a real application, this would be fetched from an API.
const teamMembers = [
  {
    id: 1,
    name: 'Sharat',
    role: 'President 🫡',
    description: 'Leads the society, organizes events, and oversees all activities.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Hrithvik',
    role: 'Vice President',
    description: 'Handles queries and assists with all activities.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Khujaev',
    role: 'Secretary',
    description: 'Manages student support and committee operations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Logan',
    role: 'Event Coordinator',
    description: 'Plans and executes events.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Lohith',
    role: 'Treasurer and PR',
    description: 'Manages finances and sponsor relations.',
    image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: 'Zhan Jong',
    role: 'Social Media Manager',
    description: 'Oversees social media presence and engagement.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    name: 'Yihung',
    role: 'Content Creator',
    description: 'Creates promotional content and manages written communication.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    name: 'Dellina',
    role: 'Student Representative',
    description: 'Represents student concerns and supports all activities.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const TeamMemberCard: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
        <p className="text-gray-600 mb-2">{member.role}</p>
        <p className="text-gray-700">{member.description}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Team;