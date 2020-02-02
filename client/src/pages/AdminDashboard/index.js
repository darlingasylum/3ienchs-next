import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

import jwt_decode from 'jwt-decode';

import { APICall } from './../../../utils/APICall';

const AdminDashboard = props => {
  return (
    <div className='hero'>
      <div className='flex flex-col align-center justify-center '>
        <p className='mt-10'>Bienvenue sur l'espace admin!</p>
        coucou
      </div>
    </div>
  );
};

export default AdminDashboard;
