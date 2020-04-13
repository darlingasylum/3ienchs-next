import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import BackOfficeLayout from '../../../layouts/BackOfficeLayout';
import './../../../less/style.less';

const Agenda = ({ events }) => {
  const content = {
    type: 'ExpansionPanelAgenda',
    addButton: 'ajouter un nouvel event',
    APIurl: 'http://localhost:4000/api/products/getAllProducts',
  };
  //   try {
  //     const token = Cookies.get('token');
  //     console.log('token', token);
  //     const isAdmin = jwt_decode(token).user_type;
  //     console.log('is admin ?', isAdmin);
  //     if (isAdmin) {

  return (
    <BackOfficeLayout>
      <div className='mt-10'>Coucou je suis Agenda</div>
    </BackOfficeLayout>
  );
  //     } else
  //       return (
  //         <div>
  //           Vous n'avez pas les autorisations nécessaires pour accéder à cette
  //           page. Veuillez vous connecter <Link href='/admin'> ici</Link>
  //         </div>
  //       );
  //   } catch (error) {
  //     console.log('error', error);
  //     return (
  //       <div>
  //         Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
  //         Veuillez vous connecter <Link href='/admin'> ici</Link> ERRORR
  //       </div>
  //     );
  //   }
};

export default Agenda;

Agenda.getInitialProps = async function () {
  const events = await fetch('http://localhost:4000/api/events/getAll');

  const data = await events.json();
  return {
    events: data.events,
  };
};
