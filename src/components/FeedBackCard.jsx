import React from 'react';
import { quotes } from '../assets';

const FeedBackCard = ({ content, name, title, img}) => (
    <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 ms:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain'/>

      <p className='font-poppins font-normal text-[16px] my-8 text-dimWhite'>{content}</p>

      <div className='flex flex-row'>
        <img src={img} alt="avatar" className='w-[60px] h-[60px] object-contain'/>
        <div className='flex flex-col ml-5'>
          <h5 className='font-poppins font-semibold text-white text-[18px]'>{name}</h5>
          <p className='font-poppins font-normal text-[16px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )


export default FeedBackCard