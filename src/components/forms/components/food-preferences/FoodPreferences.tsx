import { observer } from 'mobx-react-lite';
import { foodPreferencesDictionary } from '../../../../data/FoodPreferences';
import formSubmitionStore from '../../../../stores/form-submission.store';
import Selector from '../../../common/selector/Selector';
import './food-preferences.scss';

const FoodPreferences = observer(() => {
  const { setFoodPreferences, foodPreferences } = formSubmitionStore;
  const handleSelection = (value: string) => {
    if (!foodPreferences.includes(value)) {
      setFoodPreferences([...foodPreferences, value]);
    } else {
      setFoodPreferences([...foodPreferences].filter((food) => food !== value));
    }
  };

  return (
    <div className='form'>
      <div className='food-preferences'>
        {foodPreferencesDictionary.map((food, i) => {
          const { icon, text, value } = food;
          return (
            <Selector
              key={i}
              text={text}
              icon={icon}
              onClick={() => handleSelection(value)}
              active={foodPreferences.includes(value)}
            />
          );
        })}
      </div>
    </div>
  );
});

export default FoodPreferences;
