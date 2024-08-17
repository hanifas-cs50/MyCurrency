import { useState, useEffect, useRef } from "react";
import SelectOption from "./SelectOption";

const SelectInput = ({ data, initialData, setSelect, purpose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleCloseMenu = () => {
    setIsOpen((prev) => !prev);
  }

  const handleSelect = (value) => {
    setSelect(value);
    handleCloseMenu();
  }

  // Close search menu when clicking outside of it while the menu is active
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && isOpen) {
        handleCloseMenu();
      }
    };
    document.documentElement.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.documentElement.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="input-group" ref={menuRef}>
      <label>{purpose}</label>
      <button type="button" onClick={() => handleCloseMenu()} className="select-placeholder">
        <div className="radio-button">
          <SelectOption key={initialData.id} currency={initialData} />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`size-5 flag ${isOpen ? "flipped" : null}`}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {
        isOpen ? (
          <div className="select-input">
            <ul>
              {data.map((currencyItem) => {
                return (
                  <li key={currencyItem.id} onClick={() => handleSelect(currencyItem)} className="radio-button">
                    <SelectOption currency={currencyItem} />
                  </li>
                )
              })}
            </ul>
          </div>
        ) : null
      }
    </div>
  )
};

export default SelectInput;
// const [imageError, setImageError] = useState(false);