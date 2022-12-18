import React from 'react';
import { card } from '../assets';
import styles, { layout } from '../style';
import GetStarted from './GetStarted';

const CardDeal = () => (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className='sm:block hidden'/>
           in few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[580px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Enim impedit similique nam vero sint in ipsa aut voluptas, hic expedita!
        </p>
        <div className='ss:flex hidden font-normal font-poppins leading-tight'>
        <GetStarted />
        </div>

      </div>

      <div className={`ss:hidden flex font-normal font-poppins leading-tight ${styles.flexCenter}`}>
          <GetStarted />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] object-contain z-1 relative' />
        <div className='absolute w-[60%] h-[60%] rounded-full white__gradient z-0'/>
      </div>
    </section>
  )


export default CardDeal