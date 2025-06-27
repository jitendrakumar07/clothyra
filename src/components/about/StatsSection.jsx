import React from 'react';

const stats = [
  { stat: '1L+', label: 'Happy Customers' },
  { stat: '50K+', label: 'Orders Delivered' },
  { stat: '100%', label: 'Satisfaction Rate' },
  { stat: '7 Days', label: 'Easy Returns' }
];

const StatsSection = () => {
  return (
    <section className="mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-prata text-[#1c130b] mb-3">
          Our Impact in Numbers
        </h2>
        <p className="text-sm text-gray-600 max-w-lg mx-auto">
          Milestones that define our journey and the trust of thousands.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-[white] rounded-xl border border-[#e9dfcc] shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-3xl font-bold text-[#1c130b]">{item.stat}</h2>
            <p className="text-sm text-gray-600 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
