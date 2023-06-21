import React from 'react'
import {MdShoppingBasket} from 'react-icons/md'
import {motion} from 'framer-motion'

function RowContainer({flag}) {
  return (
    <div  className={`w-full my-12  
            ${ flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
         <div className='w-300 md:w-225 h-auto my-12 backdrop-blur-lg '>
            <div className='w-full flex items-center justify-between'>
                <motion.img 
                whileHover={{scale:1.2}}
                rc="" alt="" 
                className='w-40 -mt-8'
                />
                <motion.div
                whileTap={{scale:0.75}}
                className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingBasket className='text-white '/>
                </motion.div>
            </div>
            <div>
              
            </div>
         </div>
    </div>
  )
}

export default RowContainer