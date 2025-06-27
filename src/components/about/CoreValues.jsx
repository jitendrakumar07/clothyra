import React from 'react';

const coreValues = [
  {
    title: 'Premium Quality',
    desc: 'Every stitch, fabric, and finish is handpicked for unmatched elegance and lasting value.'
  },
  {
    title: 'Affordable Luxury',
    desc: 'We blend sophistication with accessibility—so everyone can experience elevated fashion.'
  },
  {
    title: 'Empowering Fashion',
    desc: 'Each piece we craft is meant to inspire confidence and celebrate your authentic self.'
  }
];

const CoreValues = () => {
  return (
    <section className="mb-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-prata font-semibold text-[#1c130b]">
          Our Core Values
        </h2>
        <p className="text-[15px] text-gray-600 mt-3 max-w-xl mx-auto">
          These principles shape our designs, fuel our creativity, and define the luxury experience we offer.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {coreValues.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md border border-[#e7dbc7] hover:shadow-xl hover:border-[#d3ab66] transition-all duration-300"
          >
            <h4 className="text-xl font-semibold text-[#1c130b] mb-3">{item.title}</h4>
            <p className="text-[15px] text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
