
import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import Cart from '../cart/Cart'

function OrderSummary() {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />
      </div>
      <Cart />
    </div>
  )
}

export default OrderSummary