import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { APICall } from './../../../utils/APICall';

const Admin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    const fetch_param = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    };

    APICall(`http://localhost:4000/api/users/authenticate`, fetch_param)
      .then(response => {
        console.log('response -->', response);
        return response;
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='hero'>
      <div className='flex flex-col align-center justify-center '>
        <p className='mt-10'>Bienvenue sur l'espace admin!</p>
        <form onSubmit={onSubmit}>
          <div className='flex flex-col mb-5'>
            <TextField
              label='email'
              margin='normal'
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              label='password'
              margin='normal'
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <Button type='submit' fullWidth variant='contained' color='secondary'>
            Connexion
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
