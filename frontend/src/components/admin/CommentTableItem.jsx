import React from "react";
import { assets } from "../../assets/assets";

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const blogDate = new Date(createdAt);

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
      {/* Blog / Comment Info */}
      <td className="px-6 py-4 align-top text-gray-700">
        <div className="space-y-2">
          <p>
            <span className="font-semibold text-gray-600">Blog:</span>{" "}
            {blog?.title || "Untitled"}
          </p>
          <p>
            <span className="font-semibold text-gray-600">Name:</span>{" "}
            {comment?.name || "Anonymous"}
          </p>
          <p className="text-sm leading-relaxed">
            <span className="font-semibold text-gray-600">Comment:</span>{" "}
            {comment?.content}
          </p>
        </div>
      </td>

      {/* Date */}
      <td className="px-6 py-4 text-sm text-gray-500 max-sm:hidden whitespace-nowrap">
        {blogDate.toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-center">
        <div className="flex items-center justify-center gap-4">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon}
              alt="Approve comment"
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-150 hover:opacity-80"
              title="Approve"
              onClick={() => {/* add approve handler here */}}
            />
          ) : (
            <span className="text-xs border border-green-600 bg-green-100 text-green-700 rounded-full px-3 py-1 font-medium">
              Approved
            </span>
          )}

          <img
            src={assets.bin_icon}
            alt="Delete comment"
            className="w-5 cursor-pointer hover:scale-110 transition-transform duration-150 hover:opacity-80"
            title="Delete"
            onClick={() => {/* add delete handler here */}}
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
