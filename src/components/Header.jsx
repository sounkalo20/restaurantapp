import React from 'react'
import Logo from './img/logo.png'
import Avatar from './img/avatar.png'
import { MdShoppingBasket } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='fixed w-screen z-50  p-6 px-16'>
        {/* ordinateur et tablette */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={"/"} className='flex items-center gap-2'>
                <img src={Logo} alt="le logo" className='w-9 object-cover'/>
                <p className='text-headingColor text-xl font-bold'>GoodLy</p>
            </Link>

            <div  className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Acceuil</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Menu</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>A propos</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out'>Services</li>
                </ul>
                
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl cursor-pointer'/>
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center '>
                        <p className='text-xs text-white font-semibold'>2</p>
                    </div>
                </div>

                <motion.img whileTap={{scale:0.6}} src={Avatar} alt="profil_utilisateur" className='w-8 min-w-[35px] min-h-[35px] drop-shadow-xl cursor-pointer'/>
            </div>
        </div>        
        
        {/* phone */}
        <div className='hidden md:flex w-full h-full'>
             
        </div>
    </header>
  )
}

export default Header