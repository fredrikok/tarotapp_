import React from "react";
import {  Link, useLocation } from "react-router-dom";

function QuickNav() {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = pathParts.map((part, index) => {
    const path = `/${pathParts.slice(0, index + 1).join("/")}`;
    const isActive = location.pathname.startsWith(path);
    const className = isActive ? "breadcrumb-active" : "breadcrumb-not-active";
    return (
      <React.Fragment key={index}>
        <span className={className}>&gt;</span>
        <Link to={path} className={className}>
          {part}
        </Link>
      </React.Fragment>
    );
  });

  return (
    <div className="breadcrumbs">
      <Link to="/" className="breadcrumb-active">
        Home
      </Link>
      {breadcrumbs}
    </div>
  );
}

export default QuickNav;
