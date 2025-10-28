import React from "react";

const Newsletter = () => {
  return (
    <section className="flex flex-col items-center justify-center py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Never Miss a Blog!
        </h1>
        <p className="text-gray-500 md:text-lg mb-8">
          Subscribe to get the latest blogs, tech updates, and exclusive news.
        </p>

        <form className="flex w-full flex-col sm:flex-row items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="flex-1 w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-md sm:rounded-l-none hover:bg-indigo-700 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
