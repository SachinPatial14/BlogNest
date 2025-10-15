import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative mx-6 sm:mx-16 xl:mx-24">
      <div className="text-center mt-20 mb-16 relative z-10">
        <div className="inline-flex items-center justify-center gap-3 px-5 py-1.5 mb-6 border border-indigo-300 bg-indigo-50 rounded-full text-sm text-indigo-600 shadow-sm">
          <p>✨ New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-3" alt="star icon" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-gray-800">
          Your own{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            blogging
          </span>{" "}
          <br className="hidden sm:block" />
          platform.
        </h1>

        <p className="mt-6 mb-10 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
          This is your space to think out loud, share what matters, and write
          without filters. Whether it’s one word or a thousand, your story
          starts right here.
        </p>

        <form className="flex justify-between max-w-lg mx-auto border border-gray-200 bg-white rounded-xl overflow-hidden shadow-sm focus-within:shadow-md transition-all">
          <input
            type="text"
            placeholder="Search for blogs..."
            className="w-full pl-4 py-2 outline-none text-gray-700"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2.5 m-1 rounded-lg hover:opacity-90 transition-all"
          >
            Search
          </button>
        </form>
      </div>

      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute inset-0 -z-10 opacity-40 object-cover blur-3xl"
      />
    </div>
  );
};

export default Header;
