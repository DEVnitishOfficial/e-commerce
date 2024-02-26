import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../Redux/Customers/Cart/Action'

function Cart () {
  const navigate=useNavigate()
  const dispatch = useDispatch()
  const jwt = localStorage.getItem("jwt");
  const {cart}=useSelector(store=>store);

  const handleCheckOut=()=>{
    navigate("/checkout?step=2")
  }

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt,cart.updateCartItem,cart.deleteCartItem]);


  return (
    <div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2 space-y-5'>
        {cart.cartItems.map((item) => (
            <>
              <CartItem item={item} showButton={true}/>
            </>
          ))}
        </div>
        <div className='px-5 top-0 sticky h-[100vh] mt-5 lg:mt-0'>
          <div className='border'>
                <p className='uppercase font-bold opacity-50 pb-4'>Price details</p>
                <hr />
                <div className='space-y-3 font-semibold mb-5'>
                  <div className='flex justify-between pt-3 mx-5 text-black'>
                          <span>Price ({cart.cart?.totalItem} item)</span>
                          <span>₹{cart.cart?.totalPrice}</span>
                  </div>
                  <div className='flex justify-between pt-3 mx-5 text-black'>
                          <span>Discount</span>
                          <span className='text-green-600'>-₹{cart.cart?.discount}</span>
                  </div>
                  <div className='flex justify-between pt-3 mx-5 text-black'>
                          <span>Delivery charge</span>
                          <span className='text-green-600'>Free</span>
                  </div>
                  <div className='flex justify-between pt-3 mx-5 text-black'>
                          <span className='font-bold'>Total Amount</span>
                          <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
                  </div>


                </div>
                <Button onClick={handleCheckOut} variant='contained' className='w-full' sx={{px:'2.5rem',py:'.7rem',bgcolor:'#9155fd'}}>
                      Checkout
                </Button>
          </div>
        </div>
      </div>

     

    </div>
  )
}

export default Cart
