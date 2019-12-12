import React from 'react';
import { useSelector } from 'react-redux';
// import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const basketSelector = state => state.basket.articles;

const Calendar = props => {
  let products = useSelector(basketSelector);

  return (
    <div className='nickname mt-10 w-full text-align-center'>
      <div>choisir la date de passage</div>
      {/* <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      /> */}
    </div>
  );
};

export default Calendar;
