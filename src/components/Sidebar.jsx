import React, { useContext } from 'react';
//import Link
import { Link } from 'react-router-dom';
//import icons
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
//import components
import CartItem from '../components/CartItem';
//import sidebar context
import { SidebarContext } from '../contexts/SideBarContext';


const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return <div className='w-full bg-white fixed top-0 shadow-2xl md:w-[35vw] 
  xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]'>
    Sidebar
  </div>;
};

export default Sidebar;