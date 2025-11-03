import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: assets.home_icon },
  { to: "/admin/addBlog", label: "Add Blogs", icon: assets.add_icon },
  { to: "/admin/listBlog", label: "Blog Lists", icon: assets.list_icon },
  { to: "/admin/comments", label: "Comments", icon: assets.comment_icon },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen w-64 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 shadow-sm">

      <nav className="flex flex-col mt-4 space-y-1">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            end={to === "/admin"}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3.5 text-gray-700 transition-all duration-200
              hover:bg-indigo-50 hover:text-indigo-600
              ${isActive ? "bg-indigo-100 border-l-4 border-indigo-600 text-indigo-700 font-medium" : "border-l-4 border-transparent"}`
            }
          >
            <img src={icon} alt={`${label} icon`} className="w-5 h-5 opacity-80" />
            <p className="text-sm md:text-base">{label}</p>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
