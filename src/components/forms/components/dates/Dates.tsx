import React from 'react';
import Dropdown from '../../../common/dropdown/Dropdown';
import { locations } from '../../../../data/locations';
import DatePicker from '../../../common/date-picker/DatePicker';
import { FaPlaneArrival, FaPlaneDeparture } from 'react-icons/fa';
import { MdLocationPin } from 'react-icons/md';
import formSubmitionStore from '../../../../stores/form-submission.store';
import { stringToDate } from '../../../../utils/date';
import { observer } from 'mobx-react-lite';

const Dates = observer(() => {
  const { setDeparture, setArrival, setCity, departure, arrival, city } = formSubmitionStore;
  
  return (
    <div className='form'>
      <Dropdown label='עיר' options={locations} icon={<MdLocationPin />} setter={setCity} selectedOption={city} />
      <DatePicker
        label='תאריך הגעה'
        icon={<FaPlaneArrival />}
        setter={setArrival}
        dateString={arrival.toLocaleDateString()}
      />
      <DatePicker
        label='תאריך חזרה'
        icon={<FaPlaneDeparture />}
        setter={setDeparture}
        dateString={departure.toLocaleDateString()}
      />
    </div>
  );
});

export default Dates;
