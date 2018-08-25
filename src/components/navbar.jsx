import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Total Number
        <p className="badge badge-pill badge-secondary">{totalCount}</p>
      </a>
    </nav>
  );
};

export default NavBar;
