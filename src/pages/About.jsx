import React from 'react';
import model from '../assets/model.jpg';
import VisionMission from '../components/about/VisionMission';
import CoreValues from '../components/about/CoreValues';
import TeamSection from '../components/about/TeamSection';
import StatsSection from '../components/about/StatsSection';

const About = () => {
  return (
    <section className="px-6 md:px-24 py-10 font-Prata bg-[#fffdfa] text-[#1c130b]">
      {/* Page Heading */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
          About <span className="text-[#D3AB66]">Chlothzy</span>
        </h1>
        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Discover who we are, what we stand for, and how we're redefining fashion with elegance.
        </p>
      </div>

      {/* Brand Image + Story */}
      <div className="flex flex-col lg:flex-row gap-14 items-start mb-28">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={model}
            alt="Chlothzy Store"
            className="rounded-3xl shadow-2xl object-cover max-h-[650px] w-auto border border-[#e7dbc7]"
          />
        </div>

        {/* Story */}
        <div className="w-full lg:w-1/2 pt-2 space-y-6 text-[18px] leading-loose text-gray-800 text-left">
          <p>
            At <span className="font-semibold text-[#1c130b]">Chlothzy</span>, we believe style is a language —
            one that expresses individuality, elegance, and bold confidence. Our collections are born from a desire
            to blend Indian heritage with global fashion sensibilities.
          </p>
          <p>
            From statement western wear to timeless ethnic designs, every piece is a canvas —
            made to make you feel empowered, expressive, and unforgettable, every single day.
          </p>
          <p className="text-[#1c130b] font-bold">
            Because fashion fades — but your story, your signature, and your elegance never should.
          </p>
        </div>
      </div>

      {/* Vision, Mission, Values, Team, Stats */}
      <VisionMission />
      <CoreValues />
      <TeamSection />
      <StatsSection />

      {/* CTA */}
      <div className="text-center bg-[#f9f5ee] py-12 px-6 rounded-2xl shadow-inner border border-[#e9e1d3] mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#1c130b]">
          Discover Luxury, Define Your Identity
        </h2>
        <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto font-light">
          Step into a world of fashion crafted to elevate your elegance. Because you deserve nothing less than luxury.
        </p>
        <a
          href="/collection"
          className="inline-block bg-[#1c130b] text-white px-8 py-3 rounded-full text-sm font-medium tracking-wider hover:bg-[#372213] transition duration-300 shadow-md"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
};

export default About;
