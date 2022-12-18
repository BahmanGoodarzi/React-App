import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Clients = () => (
    <section className={`${styles.flexCenter} my-4 flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[160px] min-w-[100px]`}>
          <img src={client.logo} alt="client" className='sm:w-[160px] w-[100px] cursor-pointer hover:scale-110' />
        </div>
      ))}
    </section>
  )


export default Clients