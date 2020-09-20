import React from 'react';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className='mt-10 flex flex-col align-center'>
      <div className='mt-20'>Bienvenue sur le back office 3ienchs!</div>
      <div className='my-2'>Que souhaitez-vous faire ? </div>
      <div className='mt-5'>
        <Link href='/admindashboard/products/add'>
          <a>
            <Button type='submit' variant='contained' color='secondary'>
              Ajouter une nouvelle bière
            </Button>
          </a>
        </Link>
      </div>
      <div className='mt-5'>
        <Link href='/admindashboard/orders'>
          <a>
            <Button type='submit' variant='contained' color='secondary'>
              Voir mes commandes
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
}
