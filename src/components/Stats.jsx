import React from 'react';
import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
    <section className={`${styles.flexCenter} flex-wrap flex-row ss:mb-[18] mb[6]`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className='flex flex-1 justify-start items-center flex-row m-3'>
          <h4 className='font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
          <p className='font-poppins font-normal sm:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
      ))}
    </section>
  )


export default Stats