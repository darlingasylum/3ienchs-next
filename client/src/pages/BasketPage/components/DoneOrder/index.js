import React from 'react';

//importe le button pour faire un "revenir à l'accueil"

import Button from './../../../../components/Button';

const DoneOrder = ({ orderNumber }) => {
  return (
    <div className='doneOrderWapper'>
      <p className='m-0'>Merci, votre commande a bien été prise en compte !</p>
      <p className='mt-4'>
        Votre numéro de commande est le : <span>{orderNumber}</span>
      </p>
      <p className='mt-8'>
        Un mail vous a été envoyé avec toutes les informations relatives à votre
        commande.
      </p>

      <div>
        <Button to='/'>Revenir à l'accueil</Button>
      </div>
    </div>
  );
};

export default DoneOrder;
