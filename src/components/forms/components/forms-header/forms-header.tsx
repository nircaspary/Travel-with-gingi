import React from 'react';
import './forms-header.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';
interface IFormsHeaderProps {
  title: string;
  back: () => void;
}

const FormsHeader: React.FC<IFormsHeaderProps> = ({ title, back }) => {
  return (
    <div className='forms-header'>
      <h1>{title}</h1>
      <i onClick={back}>
        <AiOutlineArrowRight />
      </i>
    </div>
  );
};

export default FormsHeader;
