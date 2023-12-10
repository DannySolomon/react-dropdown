import React from "react";

const Dropdown = ({ handleClick, handleHover, handleHoverLeave }) => {
  return (
    <div className="dropdown-menu">
      <ul
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHoverLeave()}
      >
        <li onClick={() => handleClick()}>Yes</li>
        <li onClick={() => handleClick()}>Probably Not</li>
      </ul>
    </div>
  );
};

export default Dropdown;
