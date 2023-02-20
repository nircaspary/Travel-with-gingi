import React from 'react';
import './selector.scss';

interface ISelectorProps {
  icon: JSX.Element;
  text: string;

  onClick: () => void;
  active?: boolean;
}

const Selector: React.FC<ISelectorProps> = ({ icon, text, onClick, active }) => {
  return (
    <button className={`selector ${active ? 'active' : ''}`} onClick={onClick}>
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default Selector;
