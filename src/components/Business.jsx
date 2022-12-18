import React from 'react';
import { features } from '../constants';
import styles, { layout } from '../style';
import GetStarted from './GetStarted';


const FeaturesCard = ({ icon, title, content, index}) => (
  <div className={`flex flex-row p-3 rounded-[20px] ${index === features.length - 1 ? 'mb-0' :' mb-5'} feature-card`}>
    <div className={`w-[60px] h-[60px] bg-dimBlue rounded-full ${styles.flexCenter}`}>
      <img src={icon} alt='icon' className='w-[45%] h-[45%]'/>
    </div>

    <div className='flex flex-col flex-1 ml-5'>
      <h4 className='font-poppins font-semibold text-white mb-1 text-[18px]'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite mb-1 text-[16px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (
    <section className={`${layout.section}`}>
      {/* left side */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>You do the business, <br className='sm:block hidden' />
        we'll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[580px]`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque esse nulla illo distinctio,
           porro asperiores aperiam deleniti, maiores,quod sit repudiandae similique quaerat suscipit iusto.
           Placeat aliquid dicta necessitatibus eaque?</p>

        <div className='ss:flex hidden font-normal font-poppins leading-tight'>
        <GetStarted />
        </div>

      </div>
        <div className={`ss:hidden flex font-normal font-poppins leading-tight ${styles.flexCenter}`}>
          <GetStarted />
        </div>

      {/* right side */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeaturesCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )


export default Business