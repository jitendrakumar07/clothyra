import React from 'react';

const VisionMission = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 bg-[white] p-12 rounded-3xl shadow-lg mb-24 border border-[#e9dfcf] transition-all duration-300">
      {/* Vision */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#1c130b]">Our Vision</h3>
        <p className="text-[16px] text-gray-700 leading-relaxed">
          To become India’s leading fashion house that blends <span className="font-medium text-[#D3AB66]">luxury</span> and affordability,
          while inspiring confidence through timeless, expressive design.
        </p>
      </div>

      {/* Mission */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#1c130b]">Our Mission</h3>
        <p className="text-[16px] text-gray-700 leading-relaxed">
          To deliver high-quality apparel that resonates with the bold spirit of every generation —
          crafted with <span className="text-[#D3AB66] font-medium">comfort, elegance</span>, and iconic appeal.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
