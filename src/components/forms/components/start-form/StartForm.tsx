import React from 'react';
import './start-form.scss';
const StartForm = () => {
  return (
    <div className='form start-form'>
      <img
        className='hero-image'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/ebd306150527843.62fbdbf3a973c.png'
        alt='Man Face'
      />
      <div>
        <h1>תכנן טיול עם ג'ינג'י</h1>
        <p>מלאו את הפרטים וג'ינג'י יתכנן לכם טיול מותאם אישית</p>
      </div>
      <button>בואו נתחיל</button>
    </div>
  );
};

export default StartForm;
