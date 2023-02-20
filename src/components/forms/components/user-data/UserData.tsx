import React from 'react';
import Input from '../../../common/input/Input';
import formSubmitionStore from '../../../../stores/form-submission.store';
import { MdPhoneEnabled, MdEmail } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';

const UserData = observer(() => {
  const { setUserFullName, setUserEmail, setUserPhone, user } = formSubmitionStore;
  const { email, fullName, phone } = user;

  return (
    <div className='form'>
      <Input label='שם מלא' value={fullName} icon={<FaUser />} setter={setUserFullName} />
      <Input label='אימייל' value={email} icon={<MdEmail />} setter={setUserEmail} />
      <Input label='טלפון' value={phone} icon={<MdPhoneEnabled />} setter={setUserPhone} />
    </div>
  );
});

export default UserData;
