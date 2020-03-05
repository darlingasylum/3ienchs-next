import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ChangeColors({ value, wording, onChange }) {
  return (
    <div className='flex flex-col mt-3 mb-6'>
      <Typography>Couleur {wording}</Typography>
      <div className='flex align-center'>
        <div
          className='h-10 w-10 mr-5 br-10 bs-solid bw-1 bc-grey'
          style={{
            backgroundColor: `${value}`
          }}
        ></div>
        <TextField
          id={`${wording}_color`}
          variant='outlined'
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}
