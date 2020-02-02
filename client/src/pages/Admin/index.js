import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import jwt_decode from 'jwt-decode';

import { APICall } from './../../../utils/APICall';

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const checkAuthorization = token => {
    const isAdmin = jwt_decode(token).user_type;
    if (isAdmin) {
      router.push('/admindashboard');
      return;
    }
    setErrorMessage(
      "Vous ne possédez pas les autorisations nécessaires pour accéder à l'espace admin"
    );
  };

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
        return response.token;
      })
      .then(token => checkAuthorization(token))
      .catch(err => setErrorMessage(err.message));
  };

  return (
    <div className='hero'>
      <div className='flex flex-col align-center justify-center '>
        <p className='mt-10'>Bienvenue sur l'espace admin!</p>
        <form onSubmit={onSubmit} className='w-25-percent'>
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
          <p className='text-align-center'>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Admin;
