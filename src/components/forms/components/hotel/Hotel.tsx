import AutoComplete from 'react-google-autocomplete';
import { FaBed } from 'react-icons/fa';
import formSubmitionStore from '../../../../stores/form-submission.store';
import { getBounds } from '../../../../utils/get-bounds';
import Checkbox from '../../../common/checkbox/Checkbox';
import { observer } from 'mobx-react-lite';

const Hotel = observer(() => {
  const { setHotel, setIsNoHotel, city, hotel } = formSubmitionStore;
  const bounds = getBounds(city);

  const options = { componentRestrictions: { country: 'ro' }, types: ['address'], strictBounds: true, bounds };
  return (
    <>
      <div className='form'>
        <div className='dropdown-container'>
          <div className='dropdown input'>
            <label>שם המלון</label>
            <AutoComplete
              placeholder='הקלד'
              options={options}
              className='input'
              apiKey={'AIzaSyAs_AiOKFwbmjBIhgnW3fPw5a3IqEUvxj8'}
              onPlaceSelected={(place: any) => {
                const { lat, lng } = place.geometry.location;
                setHotel(lat(), lng(), place.formatted_address);
              }}
              defaultValue={hotel.name}
            />
          </div>
          <i>
            <FaBed />
          </i>
        </div>
        <Checkbox setter={setIsNoHotel} label='עדיין לא סגרתי מלון' />
      </div>
    </>
  );
});

export default Hotel;
