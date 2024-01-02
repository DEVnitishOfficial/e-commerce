
import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CartItem() {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/j/m/u/m-plain-collar-20072022-mildin-original-imagstkjztgagw7t.jpeg?q=70" alt="" />
            </div>

            <div className='ml-5 space-y-1'>
              <p className='font-semibold'>Men Printed Round Neck Cotton Blend White T-Shirt</p>
              <p className='opacity-50'>Size: L,white</p>
              <p className='opacity-50 mt-2'>Seller : NB NICKY BOY </p>
              <div className='flex space-x-5 items-center text-lg  text-gray-900 mt-6'>
                <p className='font-semibold'>₹339</p>
                <p className='opacity-50 line-through'>₹1,299</p>
                <p className='text-green-500 font-semibold'>73% off</p>
              </div>
            </div>
      
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                      <IconButton sx={{color:'#e84848'}}>
                          <RemoveCircleOutlineIcon />
                      </IconButton>
                          <span className='py-1 px-7 border rounded-sm'>3</span>
                       <IconButton sx={{color:'#0c14f7'}}> 
                           <AddCircleOutlineIcon />
                         </IconButton>
                    </div>
                    <div>
                      <Button sx={{color:'#e84848'}}>
                        remove
                      </Button>
                    </div>

            </div>
        
    </div>
  )
}

export default CartItem