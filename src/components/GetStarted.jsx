import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[150px] h-[50px] bg-blue-gradient rounded-lg p-[1px] hover:p-[2px] ml-7 cursor-pointer`}>
      <div className={`${styles.flexCenter} bg-primary w-[100%] h-[100%] rounded-lg`}>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className='font-poppins font-medium text-[17px]'>
            <span className='text-gradient'>Get Started</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[20px] h-[20px] object-contain ml-1' />
        </div>
      </div>
    </div>
  )


export default GetStarted