import useMultistepForm from '../../hooks/useMultistepForm';
import Dates from './components/dates/Dates';
import FoodPreferences from './components/food-preferences/FoodPreferences';
import FormsFooter from './components/forms-footer/forms-footer';
import FormsHeader from './components/forms-header/forms-header';
import Hotel from './components/hotel/Hotel';

import Interests from './components/interests/Interests';
import UserData from './components/user-data/UserData';
import './forms.scss';

const Forms = () => {
  const { step, back, next, currentStepTitle, currentStepIndex, numberOfSteps } = useMultistepForm([
    <Dates />,
    <Interests />,
    <FoodPreferences />,
    <Hotel />,
    <UserData />,
  ]);

  return (
    <div className='forms'>
      <FormsHeader title={currentStepTitle} back={back} />
      {step}
      <FormsFooter next={next} currentStepIndex={currentStepIndex} numberOfSteps={numberOfSteps} />
    </div>
  );
};

export default Forms;
