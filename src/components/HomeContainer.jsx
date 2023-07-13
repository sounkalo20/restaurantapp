import React from 'react'
import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'
import { heropData } from '../utils/data'




const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center justify-center gap-2 bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>moto Livraison</p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img src={Delivery} className='w-full h-full object-contain' alt="" />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
          Livraison rapide <span className='text-orange-600 text-[3rem] lg:text-[5rem] '>Chez Vous</span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vero quo 
          assumenda iste autem alias, odit optio velit enim quaerat hic cumque. 
          Animi voluptatem ducimus neque saepe voluptatibus maxime soluta.
        </p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto'>commander maintenant</button>
      </div>
      <div className='py-2  flex-1 flex items-center relative'>
            <img src={HeroBg} className='h-420 ml-auto lg:h-650 lg:w-auto w-full' alt="" />
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap'>
                {heropData && heropData.map(n => (
                    <div key={n.id} className=' lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                        <img src={n.imageSrc} alt="item1" className='w-20 -mt-10 lg:w-40 lg:-mt-20' />
                        <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>{n.name}</p>
                        <p className='text-[12px]  lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                        <p className='text-sm font-semibold text-headingColor'>{n.price} <span className='text-xs text-green-800'>FCFA</span></p>
                    </div>
                ))}
            </div>
      </div>
    </section>
  )
}

export default HomeContainer