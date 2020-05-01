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
    <div className='calendarWrapper'>
      <div className='stepsTitleWrapper'>
        <Step number={1} />
        <h3 className='calendartitle'>Choisissez la date de passage</h3>
      </div>

      <h3 className='calendarSubtitle'>
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
