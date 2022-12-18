import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeadBackCatd from './FeedBackCard'


const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div />
      <div className='flex justify-between w-full items-center md:flex-row flex-col sm:mb-15 mb-6 relative z-1'>
        <h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden'/> saying aboit us</h1>
        <p className={`${styles.paragraph} max-w-[550px] text-left `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloremque quasi, non doloribus mollitia
           nulla, suscipit voluptate illo commodi exercitationem in quis aliquam facilis? Necessitatibus doloribus
           nulla expedita laudantium quis inventore itaque? Necessitatibus iure dolore provident, nam iusto modi labore.
        </p>
      </div>

      <div className='flex flex-wrap Sm:justify-start justify-center w-full feedback-container relative z-1'>
        {feedback.map((card) => (
          <FeadBackCatd key={card.id} {...card} />
        ))}
      </div>
    </section>
  )


export default Testimonials