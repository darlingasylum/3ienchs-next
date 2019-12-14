import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

const basketSelector = state => state.basket.articles;
registerLocale('fr', fr);

const Calendar = props => {
  let products = useSelector(basketSelector);
  const [startDate, setDate] = useState(new Date());

  const handleChange = date => {
    console.log(date);
    setDate(date);
  };

  const enabledDates = date => {
    return date.getDay() === 3 || date.getDay() === 5;
  };

  return (
    <div className='nickname mt-10 m-0 w-full text-align-center'>
      <h3 className='m-0'>choisir la date de passage</h3>
      <h3 className='font-light f3 mt-0 mb-10'>
        Les mercredi et vendredis, entre 17h et 20h
      </h3>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        filterDate={enabledDates}
        dateFormat='dd/MM/yyyy'
        locale='fr'
        inline
      />
    </div>
  );
};

export default Calendar;
