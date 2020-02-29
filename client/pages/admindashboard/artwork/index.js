import React from 'react';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';
import Link from 'next/link';

import BackOfficeLayout from '../../../layouts/BackOfficeLayout';
import './../../../less/style.less';

const Artwork = ({ artists }) => {
  //   try {
  //     const token = Cookies.get('token');
  //     console.log('token', token);
  //     const isAdmin = jwt_decode(token).user_type;
  //     console.log('is admin ?', isAdmin);
  //     if (isAdmin) {

  console.log('artist artwork -->', artists);
  return (
    <BackOfficeLayout>
      <div className='mt-10'>Coucou je suis Artwork</div>
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

export default Artwork;

Artwork.getInitialProps = async function() {
  const artists = await fetch(
    'http://localhost:4000/api/artists/getArtworkArtists'
  );

  const data = await artists.json();
  console.log();
  return {
    artists: data.artists
  };
};
