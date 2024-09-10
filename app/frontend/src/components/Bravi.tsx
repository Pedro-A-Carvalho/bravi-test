
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Bravi = () => {
  return (
    <div className="bravi">
      <img src="https://bravi.com.br/app/themes/bravi/assets/img/logo-bravi.png" alt="Bravi logo" />
      <p>Visit us at bravi.com.br</p>
      <p>hello@bravi.com.br</p>
      <div className='location'>
        <p><LocationOnIcon/>Florianópolis
        Rua Admar Gonzaga, nº 440
        Itacorubi
        CEP: 88034-000</p>
      </div>
    </div>
  );
};

export default Bravi;