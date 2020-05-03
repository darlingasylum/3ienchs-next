import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { calculatePrice, countArticles } from '@/utils/calculatePrice';
import bottles from '@/static/icons/bottles.png';
import Link from '@/src/components/Link';

const basketSelector = (state) => state.basket.articles;

const Basket = () => {
  let basket = useSelector(basketSelector);
  const router = useRouter();

  return (
    <div className='basketWrapper'>
      <img
        src={bottles}
        alt='logo_iench'
        className='max-width-50 w-25-percent'
      />
      <div className='nickname'>
        <span>{countArticles(basket)}</span>
        <span>=</span>
        <span>{calculatePrice(countArticles(basket))}</span>
        <span>€</span>
      </div>
      {router.pathname === '/commander' && (
        <Link href='/panier'>
          <div className='basketText'>Voir le panier</div>
        </Link>
      )}
      {router.pathname === '/panier' && (
        <Link href='/commander'>
          <div className='basketText'>Retour choix</div>
        </Link>
      )}
    </div>
  );
};

export default Basket;
