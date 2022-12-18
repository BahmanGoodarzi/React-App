import React from 'react'
import { google, bill, apple } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
      // left side
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="bill" className='w-[100%] h-[100%]' />
      </div>

     {/* right side */}
     <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
        Easily control your <br className='sm:block hidden' /> billing & invoicing.
      </h2>

      <p className={`${styles.paragraph} max-w-[580px]`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam dolorum tenetur enim voluptatem aspernatur 
         perferendis voluptatum illum animi sint! Error praesentium id maxime commodi totam.
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={apple} alt="app-store" className='w-[130px] h-[47px] object-contain cursor-pointer mr-4' />
        <img src={google} alt="google-store" className='w-[130px] h-[47px] object-contain cursor-pointer' />
      </div>
     </div>
    </section>
  )


export default Billing