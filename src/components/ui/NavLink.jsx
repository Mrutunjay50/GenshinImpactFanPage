import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ 
  to, 
  children, 
  className = "",
  onClick,
  ...props 
}) => {
  const baseClasses = "hover:text-[#e7dc36] cursor-pointer border-[1px] border-transparent transition ease-in-out duration-300 hover:border-white px-2 py-1 rounded-md";

  return (
    <Link to={to} onClick={onClick} className={`${baseClasses} ${className}`} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;

