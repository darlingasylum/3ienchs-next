import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';

import Step from './../../pages/BasketPage/components/Step';

registerLocale('fr', fr);

const Calendar = ({ getDate, pickupDate }) => {
  const handleChange = (date) => {
    getDate(date);
  };

  const enabledDates = (date) => {
    return date.getDay() === 3 || date.getDay() === 5;
  };

  return (
    <div className='nickname mt-10 m-0 w-full text-align-center'>
      <Step number={1} />
      <h3 className='m-0 f2 inline-block'>Choisissez la date de passage</h3>
      <h3 className='font-light f3 mt-0 mb-10'>
        Les mercredi et vendredis, entre 17h et 20h
      </h3>
      <DatePicker
        selected={pickupDate}
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
