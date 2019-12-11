import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { calculatePrice } from '@/utils/calculatePrice';
import bottles from '@/static/icons/bottles.png';
import Link from '@/src/components/Link';

const basketSelector = state => state.basket.articles;

const Basket = () => {
  let basket = useSelector(basketSelector);
  const router = useRouter();

  const unitBeerPrice = 3;

  const countArticles = basket => {
    let count = 0;
    if (basket.length > 0) {
      basket.map(product => (count = count + product.quantity));
    }
    return count;
  };

  return (
    <div className='fixed r-10 t-15 background-greylight-transp p-6 br-40 flex flex-col align-center'>
      <img
        src={bottles}
        alt='logo_iench'
        className='max-width-50 w-25-percent'
      />
      <div className='nickname'>
        <span>{countArticles(basket)}</span>
        <span>=</span>
        <span>{calculatePrice(countArticles(basket), unitBeerPrice)}</span>
        <span>€</span>
      </div>
      {router.pathname === '/commander' && (
        <Link href='/panier'>
          <div className='w-44 text-align-center nickname text-white bg-purple-dark br-8 pl-1 pr-1 cursor-pointer'>
            Voir le panier
          </div>
        </Link>
      )}
      {router.pathname === '/panier' && (
        <Link href='/commander'>
          <div className='w-44 text-align-center nickname text-white bg-purple-dark br-8 pl-1 pr-1 cursor-pointer'>
            Retour choix
          </div>
        </Link>
      )}
    </div>
  );
};

export default Basket;
