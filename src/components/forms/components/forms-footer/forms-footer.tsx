import React from 'react';
import './forms-footer.scss';
import formSubmitionStore from '../../../../stores/form-submission.store';
import { AiOutlineCheck } from 'react-icons/ai';

interface IFormsFooterProps {
  next: () => void;
  currentStepIndex: number;
  numberOfSteps: number;
}
const FormsFooter: React.FC<IFormsFooterProps> = ({ next, currentStepIndex, numberOfSteps }) => {
  const { submitForm } = formSubmitionStore;
  return (
    <div className='forms-footer'>
      <button
        className='action-button'
        onClick={() => {
          if (currentStepIndex === numberOfSteps - 1) {
            submitForm();
          } else {
            next();
          }
        }}>
        הבא
      </button>
      <div className='steps'>
        {Array.from(Array(numberOfSteps)).map((stepNumber, i) => (
          <React.Fragment key={i}>
            <div className={`step-number-circle ${currentStepIndex >= i ? 'active' : ''}`}>
              {currentStepIndex < i + 1 ? i + 1 : <AiOutlineCheck />}
            </div>
            {i !== numberOfSteps - 1 && <hr className='step-number-separator' />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FormsFooter;
