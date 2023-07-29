import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SideBarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  return (
  <header>
    <div className='bg-pink-200'>
      Header
    </div>
    <div onClick={() => setIsOpen(!isOpen)} 
    className='cursor-pointer flex relative'>
      <BsBag className='text-2xl'/>
    </div>
  </header>);
};

export default Header;