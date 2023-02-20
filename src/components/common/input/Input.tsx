import React, { useEffect, useRef } from 'react';
import './input.scss';

const Input: React.FC<{
  label: string;
  icon: JSX.Element;
  setter: (value: string) => void;
  value: string;
}> = ({ label, icon, setter, value }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const setInputData = () => {
      if (inputRef.current) {
        setter(inputRef.current.value);
      }
    };
    inputRef.current?.addEventListener('focusout', setInputData);
    return () => window.removeEventListener('focusout', setInputData);
  }, [setter]);

  return (
    <div className='dropdown-container' onClick={() => inputRef.current?.focus()}>
      <div className='dropdown input'>
        <label>{label}</label>
        <input className='input' type='text' dir='ltr' ref={inputRef} defaultValue={value} />
      </div>
      <i>{icon}</i>
    </div>
  );
};

export default Input;
