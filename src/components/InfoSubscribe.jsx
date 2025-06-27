import { FaHeadphones, FaExchangeAlt, FaCheckCircle } from 'react-icons/fa';

const InfoSubscribe = () => {
  return (
    <section className="py-20 px-4 md:px-24 font-outfit bg-white text-center">
      {/* Policies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col items-center">
          <FaExchangeAlt className="text-3xl mb-4 text-[#1c130b]" />
          <h4 className="font-semibold text-[16px] text-[#1c130b]">Easy Exchange Policy</h4>
          <p className="text-[14px] text-gray-600 mt-1">
            We offer hassle-free exchange on every order
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-3xl mb-4 text-[#1c130b]" />
          <h4 className="font-semibold text-[16px] text-[#1c130b]">7 Days Return Policy</h4>
          <p className="text-[14px] text-gray-600 mt-1">
            Enjoy worry-free 7 days return on all products
          </p>
        </div>

        <div className="flex flex-col items-center">
          <FaHeadphones className="text-3xl mb-4 text-[#1c130b]" />
          <h4 className="font-semibold text-[16px] text-[#1c130b]">24/7 Customer Support</h4>
          <p className="text-[14px] text-gray-600 mt-1">
            Our support team is always here to assist you
          </p>
        </div>
      </div>

      {/* Subscribe */}
      <div>
        <h5 className="text-[15px] font-medium text-[#4b2f19] mb-1 tracking-wider uppercase font-prata">
          Join the Chlothzy Style Community
        </h5>

        <h2 className="text-[24px] md:text-[28px] font-prata text-[#1c130b] mb-2">
          Subscribe now & get <span className="text-[#d3ab66]">20% off</span>
        </h2>

        <p className="text-[15px] text-gray-700 font-outfit mb-6">
          Chlothzy Fashion – Where Style Meets Confidence.
        </p>

       <form className="flex flex-col md:flex-row justify-center items-center gap-3 mt-4 w-full md:w-auto">
  <input
    type="email"
    placeholder="Enter your email"
    className="border border-gray-300 px-4 py-2 w-72 md:w-80 rounded-md outline-none text-sm focus:ring-2 focus:ring-[#d3ab66] transition"
  />
  <button
    type="submit"
    className="bg-[#1c130b] text-white px-6 py-2 rounded-md text-sm font-medium tracking-wide hover:bg-[#372213] transition"
  >
    SUBSCRIBE
  </button>
</form>

      </div>
    </section>
  );
};

export default InfoSubscribe;
