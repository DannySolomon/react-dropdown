import { useState } from "react";
import Dropdown from "./Dropdown";

function App() {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDownListItemClick = () => {
    setShowDropDown(false);
  };

  const handleOnHover = () => {
    setShowDropDown(true);
  };

  const handleOnHoverLeave = () => {
    setShowDropDown(false);
  };

  return (
    <>
      <div className="content">
        <h3 className="question">Should you use a dropdown?</h3>
        <div className="dropdown-button">
          <button
            onMouseEnter={() => handleOnHover()}
            onMouseLeave={() => handleOnHoverLeave()}
          >
            Select &#9660;
          </button>
          {showDropDown && (
            <Dropdown
              handleClick={handleDropDownListItemClick}
              handleHover={handleOnHover}
              handleHoverLeave={handleOnHoverLeave}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
