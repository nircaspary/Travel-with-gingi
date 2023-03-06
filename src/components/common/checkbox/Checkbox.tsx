import React from 'react';
import './checkbox.scss';
import { AiOutlineCheck } from 'react-icons/ai';
const Checkbox: React.FC<{ label: string; setter: (boolean: boolean) => void; boolean: boolean }> = ({
  label,
  setter,
  boolean,
}) => {
  return (
    <div className='checkbox-container'>
      <p>{label}</p>
      <div className={`checkbox ${boolean ? 'checked' : ''}`} onClick={() => setter(!boolean)}>
        {boolean && <AiOutlineCheck />}
      </div>
    </div>
  );
};

export default Checkbox;
