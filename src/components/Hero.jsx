import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      
      {/* left side */}
      <div className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-lg mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'> 20% </span>
            Discount For {" "} 
            <span className='text-white'>1 Mount </span>
            Accont
          </p>
        </div>

        <div className='flex flex-row justify-between item-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[40px] text-white leading-tight'>
            The Next <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Generation</span> <br className='sm:block hidden' /> {" "}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='w-full font-poppins font-semibold ss:text-[60px] text-[40px] text-white leading-tight'>
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis cum quasi hic qui dolorem,
          necessitatibus dolorum atque quibusdam consequatur enim..
        </p>
      </div>

      {/* right side */}
      <div>
        <img src={robot} alt='robot' className='w-[90%] h-[90%] relative z-[5] md:mt-[0] mt-6' />
        <div className='absolute top-10 z-[0] w-[40%] h-[35%] pink__gradient'></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-6`}>
        <GetStarted />
      </div>
    </section>
  )


export default Hero