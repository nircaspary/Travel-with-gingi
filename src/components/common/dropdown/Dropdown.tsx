import React, { useState } from 'react';
import './dropdown.scss';
import { IoMdArrowDropdown } from 'react-icons/io';

const Dropdown: React.FC<{
  options: { text: string; value: string }[];
  label: string;
  icon: JSX.Element;
  setter: (value: any) => void;
  selectedOption: { text: string; value: string };
}> = ({ options, label, icon, setter, selectedOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className='dropdown-container' onClick={() => setIsDropdownOpen((prev) => !prev)}>
      <div className='dropdown'>
        <label>{label}</label>
        <p className='selected-option'>
          {selectedOption.text}
          <i>
            <IoMdArrowDropdown />
          </i>
        </p>
        {isDropdownOpen && (
          <div className='options'>
            {options
              .filter((option) => option !== selectedOption)
              .map((option, i) => (
                <p key={i} className='option' onClick={() => setter(option)}>
                  {option.text}
                </p>
              ))}
          </div>
        )}
      </div>
      <i>{icon}</i>
    </div>
  );
};

export default Dropdown;
