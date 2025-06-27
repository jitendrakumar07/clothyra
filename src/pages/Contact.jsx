import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from 'react-icons/fa';
import { FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  return (
    <section className="relative bg-[#fffdfa] text-[#1c130b] font-Prata px-6 md:px-24 py-10">
      {/* Page Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-4xl font-extrabold uppercase tracking-wide">
          Connect with <span className="text-[#D3AB66]">Chlothzy</span>
        </h1>
        <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Have a question, a creative idea, or a style dilemma? Reach out to us — we're here to help, style, and inspire.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        {/* Contact Form */}
        <form className="bg-[#fcf9f4] p-10 rounded-3xl shadow-2xl border border-[#ece4d9] space-y-8">
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full mt-2 px-5 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D3AB66]"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-5 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D3AB66]"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              placeholder="Share your message with us..."
              className="w-full mt-2 px-5 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D3AB66]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1c130b] text-white py-3 rounded-lg font-semibold hover:bg-[#372213] transition-all duration-200 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info + Map */}
        <div className="space-y-12">
          {/* Info Cards */}
          <div className="space-y-6 text-base">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#D3AB66] mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-lg">Showroom Address</h4>
                <p className="text-gray-700">22 Fashion Street, New Delhi - 110001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-[#D3AB66] mt-1" size={18} />
              <div>
                <h4 className="font-semibold text-lg">Call Us</h4>
                <p className="text-gray-700">+91 7780076976</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#D3AB66] mt-1" size={18} />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-700">jitendrakumar77800@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <iframe
            title="Chlothzy Location"
            className="w-full h-64 rounded-2xl border border-gray-300 shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8391876459!2d77.06889736028406!3d28.527582007414206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce398f36df2d1%3A0x4d0eecb3e03c5483!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1671452435574!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="mt-20 text-center">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex justify-center gap-6 text-xl text-[#1c130b]">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="hover:text-[#D3AB66] transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="hover:text-[#D3AB66] transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="hover:text-[#D3AB66] transition" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaXTwitter className="hover:text-[#D3AB66] transition" />
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7780076976?text=Hello%20Chlothzy!"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </section>
  );
};

export default Contact;
