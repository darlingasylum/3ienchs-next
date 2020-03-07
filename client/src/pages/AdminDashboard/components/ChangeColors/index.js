import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function ChangeColors({
  id,
  name,
  type,
  value,
  wording,
  onChange,
  handleBlur,
  error,
  touched
}) {
  return (
    <div className='flex flex-col mt-3 mb-6'>
      <Typography>Couleur {wording}</Typography>
      <div className='flex align-center'>
        <div
          className='h-10 w-10 mr-5 br-10 bs-solid bw-1 bc-grey'
          style={{
            backgroundColor: `${value}`,
            marginBottom: error && touched ? '1.5rem' : 0
          }}
        ></div>
        <TextField
          id={id}
          name={name}
          type={type}
          variant='outlined'
          onChange={onChange}
          onBlur={handleBlur}
          value={value}
          error={error && touched}
          helperText={error && touched && error}
        />
      </div>
    </div>
  );
}
