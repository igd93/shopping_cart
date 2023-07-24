import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({ product }) => {
  //destructure product  
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4
      relative overflow-hidden group transition'>
        <div className = 'w-full h-full flex justify-center items-center'>
          {/* images */}
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110'
              src={image} 
              alt="" />
          </div>
        </div>
      </div>
      <div>2</div>
    </div>)
};

export default Product;