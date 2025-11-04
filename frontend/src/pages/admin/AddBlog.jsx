import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // handle form submit
  };

  const generateContent = async () => {
    // AI generation logic
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-gray-50 text-gray-700 min-h-screen overflow-y-auto py-10 px-4 md:px-8"
    >
      <div className="bg-white w-full max-w-3xl mx-auto p-6 md:p-10 shadow-lg rounded-2xl border border-gray-100">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Blog
        </h2>

        {/* Thumbnail Upload */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Upload Thumbnail</p>
          <label htmlFor="image" className="block cursor-pointer">
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="upload"
              className="mt-2 h-32 w-full max-w-sm object-cover border border-gray-300 rounded-lg hover:opacity-90 transition"
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </label>
        </div>

        {/* Title */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Blog Title</p>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Enter blog title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Subtitle */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Sub Title</p>
          <input
            type="text"
            onChange={(e) => setSubTitle(e.target.value)}
            value={subTitle}
            placeholder="Enter sub title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Blog Description */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Blog Description</p>
          <div className="relative">
            <div
              ref={editorRef}
              className="h-60 border border-gray-300 rounded-lg p-2 bg-white"
            ></div>
            <button
              type="button"
              onClick={generateContent}
              className="absolute bottom-3 right-3 bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-700 transition"
            >
              Generate with AI
            </button>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <p className="font-medium text-gray-700 mb-2">Blog Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            name="category"
            className="w-full p-3 border border-gray-300 rounded-lg text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center gap-3 mb-8">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="w-5 h-5 accent-blue-600 cursor-pointer"
          />
          <p className="text-gray-700">Publish Now</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-40 h-11 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Add Blog
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
