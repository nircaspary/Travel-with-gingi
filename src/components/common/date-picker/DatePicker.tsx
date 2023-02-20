import React, { useRef, useState } from 'react';
import './date-picker.scss';
import { IoMdArrowDropdown } from 'react-icons/io';
import { dateStringToDDMMYYY } from '../../../utils/date';

interface IDatePickerProps {
  label: string;
  icon: JSX.Element;
  setter: (date: string) => void;
  dateString: string;
}
const DatePicker: React.FC<IDatePickerProps> = ({ label, icon, setter, dateString }) => {
  const datePickerRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <div className='dropdown-container' onClick={() => datePickerRef?.current?.showPicker()}>
        <div className='dropdown'>
          <label>{label}</label>
          <p className='selected-option'>
            {dateStringToDDMMYYY(dateString)}
            <i>
              <IoMdArrowDropdown />
            </i>
          </p>
        </div>
        <i>{icon}</i>
        <input
          type='date'
          className='date-picker'
          ref={datePickerRef}
          onChange={(e) => setter(e.target.value.replaceAll('-', '/'))}
        />
      </div>
    </>
  );
};

export default DatePicker;
