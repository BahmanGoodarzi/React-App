import React from 'react';
import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
    <section className={`flex-col ${styles.flexCenter}  ${styles.paddingX}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mr-10`}>

        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img src={logo} alt="hoobank" className='w-[266px] h-[75px] object-contain'/>
          <p className={`${styles.paragraph} max-w-[360px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          ! Voluptate, possimus?
          </p>
        </div>

        <div className='flex flex-[1.5] flex-row flex-wrap w-full justify-between md:mt-0 mt-8'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>

              <h4 className='font-poppins font-normal text-white sm:text-[19px] leading-[28px]'>
                {footerLink.title}
              </h4>

              <ul className='list-none mt-3'>
                {footerLink.links.map((link, index) => (
                  <li key={link.name} className={`font-poppins font-normal text-dimWhite sm:text-[15px]
                   leading-[24px] hover:text-secondary cursor-pointer ${index === footerLink.links.length - 1 ? 'mb-0' : 'mb-3'}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between items-center md:flex-row flex-col w-full my-8 py-7 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-white text-center sm:text-[16px] leading-[28px]'>
          2021 HooBank. All Righte Reaerved.
        </p>

        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => (
            <img key={social.id} src={social.icon} alt='social' 
            className={`w-[21px] h-[21px] cursor-pointer object-contain ${index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'}`}/>
          ))}
        </div>
      </div>
    </section>
  )


export default Footer