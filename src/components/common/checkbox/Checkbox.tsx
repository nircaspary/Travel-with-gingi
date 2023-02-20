import React from 'react';
import './checkbox.scss';
const Checkbox: React.FC<{ label: string; setter: (boolean: boolean) => void }> = ({ label, setter }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '80%', gap: 20 }}>
      <p>{label}</p>
      <input type='checkbox' className='checkbox' onChange={(e) => setter(e.target.checked)} />
    </div>
  );
};

export default Checkbox;
