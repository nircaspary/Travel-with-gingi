import { observer } from 'mobx-react-lite';
import { interestsDictionary } from '../../../../data/interests';
import formSubmitionStore from '../../../../stores/form-submission.store';
import Selector from '../../../common/selector/Selector';
import './interests.scss';

const Interests = observer(() => {
  const { setInterests, interests } = formSubmitionStore;

  const handleSelection = (value: string) => {
    if (!interests.includes(value)) {
      setInterests([...interests, value]);
    } else {
      setInterests([...interests].filter((food) => food !== value));
    }
  };

  return (
    <div className='form'>
      <div className='interests'>
        {interestsDictionary.map((interest, i) => {
          const { icon, text, value } = interest;
          return (
            <Selector
              key={i}
              text={text}
              icon={icon}
              onClick={() => handleSelection(value)}
              active={interests.includes(value)}
            />
          );
        })}
      </div>
    </div>
  );
});

export default Interests;
