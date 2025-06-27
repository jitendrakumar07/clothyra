import React from 'react';

const teamMembers = [
  {
    name: 'Ananya Sharma',
    role: 'Creative Director',
    img: 'https://randomuser.me/api/portraits/women/79.jpg'
  },
  {
    name: 'Rahul Mehra',
    role: 'Fashion Designer',
    img: 'https://randomuser.me/api/portraits/men/51.jpg'
  },
  {
    name: 'Priya Desai',
    role: 'Brand Strategist',
    img: 'https://randomuser.me/api/portraits/women/85.jpg'
  }
];

const TeamSection = () => {
  return (
    <section className="text-center mb-24">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-prata text-[#1c130b] mb-6">
        Meet Our Creative Team
      </h2>
      <p className="text-sm text-gray-600 mb-12 max-w-xl mx-auto">
        Behind every design, there’s a passionate team committed to style, strategy, and storytelling.
      </p>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 bg-white rounded-2xl border border-[#e7dbc7] shadow-md transition-all duration-300 hover:border-[#d3ab66] hover:shadow-[0_0_10px_3px_rgba(211,171,102,0.4)]"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-28 h-28 rounded-full object-cover shadow-md border-2 border-[#d3ab66] mb-4"
            />
            <h4 className="font-semibold text-[#1c130b] text-md">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
