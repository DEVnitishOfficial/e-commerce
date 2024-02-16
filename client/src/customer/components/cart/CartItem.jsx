
import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { removeCartItem, updateCartItem } from '../../../Redux/Customers/Cart/Action';
import { useDispatch } from 'react-redux';

function CartItem({ item, showButton }) {
  console.log('item',item)
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: item?._id, jwt};
    dispatch(removeCartItem(data));
  };
  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num}, cartItemId:item?._id, jwt}
    dispatch(updateCartItem(data))
  }

  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src={item?.product?.imageUrl}alt="" />
            </div>

            <div className='ml-5 space-y-1'>
              <p className='font-semibold'>{item?.product?.title}</p>
              <p className='opacity-50'>Size: {item?.size} {item?.product?.color}</p>
              <p className='opacity-50 mt-2'>Seller : {item?.product?.brand} </p>
              <div className='flex space-x-5 items-center text-lg  text-gray-900 mt-6'>
                <p className='font-semibold'>₹{item?.product?.discountedPrice}</p>
                <p className='opacity-50 line-through'>₹{item?.product?.price}</p>
                <p className='text-green-500 font-semibold'>{item?.product?.discountPersent}% off</p>
              </div>
            </div>
      
        </div>
        {showButton && <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                      <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={item?.quantity<=1} sx={{color:'#e84848'}}>
                          <RemoveCircleOutlineIcon />
                      </IconButton>
                          <span className='py-1 px-7 border rounded-sm'>{item?.quantity}</span>
                       <IconButton onClick={()=>handleUpdateCartItem(1)} sx={{color:'#0c14f7'}}> 
                           <AddCircleOutlineIcon />
                         </IconButton>
                    </div>
                    <div>
                      <Button onClick={handleRemoveItemFromCart} sx={{color:'#e84848'}}>
                        remove
                      </Button>
                    </div>

            </div>}
        
    </div>
  )
}

export default CartItem