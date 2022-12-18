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

          <h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[40px] leading-tight'>
            <span className=' text-white'>The Next</span> <br className='sm:block hidden' /> {" "}
            <span className='text-gradient'>Generation</span> <br className='sm:block hidden' /> {" "}
            <span className=' text-white'>Payment Method.</span>
                      
            <p className={`${styles.paragraph} max-w-[580px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus blanditiis cum quasi hic qui dolorem,
              necessitatibus dolorum atque quibusdam consequatur enim...
            </p>
            <div className=' text-dimBlack ss:flex hidden font-normal'>
              <GetStarted />
            </div>
          </h1>

      </div>

      {/* right side */}
      <div className='flex flex-1'>
        <img src={robot} alt='robot' className='w-[90%] h-[90%] relative z-[5] md:mt-[0] mt-6' />
        <div className='absolute top-10 z-[0] w-[40%] h-[35%] pink__gradient'></div>
      </div>

      <div className={`ss:hidden font-poppins leading-tight ${styles.flexCenter} mt-6`}>
        <GetStarted />
      </div>
    </section>
  )


export default Hero