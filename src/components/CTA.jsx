import React from 'react';
import styles from '../style';
import GetStarted from './GetStarted';

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient-2 box-shadow`} >
      <div className='flex flex-col flex-1'>
        <h2 className={`${styles.heading2}`}>Let's try service now!</h2>
        <p className={`${styles.paragraph} max-w-[550px]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Perspiciatis nam id in facilis quaerat pariatur consequuntur veritatis voluptas? Nam, odio?
        </p>
      </div>

      <div className={`${styles.flexCenter} font-poppins font-normal leading-tight sm:ml-8 ml-0 sm:mt-0 mt-7`}>
        <GetStarted />
      </div>
    </section>
  )


export default CTA