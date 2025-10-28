import React, { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div className="my-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 relative">
        {blogCategories.map((item) => (
          <div className="relative" key={item}>
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                menu === item
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {item}

              {/* Animated highlight */}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 -z-10 shadow-md"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      <div className="grid gap-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8
      mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data.filter((blog)=> menu === "All"?true:blog.category === menu)
        .map((blog)=><BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  );
};

export default BlogList;
