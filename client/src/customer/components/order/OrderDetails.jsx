import React from 'react'
import AddressCard from '../addressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';

function OrderDetails () {
  return (
    <div className='px-5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'>Dilivery Address</h1>
        <AddressCard />
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className='space-y-5'>

        {[1,1,1,1,1,1].map((item) =>  <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:"space-between"}}>

<Grid item xs={6} className='flex'>
    <div>
        <img className='h-[5rem] w-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/x/m/c/l-maroon-ckkk-jed-enterprice-original-imagrdhtqnxmzhf9.jpeg?q=70" alt="" />
    </div>
    <div className='space-y-2 ml-5'>
        <p>Men Striped Polo Neck Pure Cotton Maroon T-Shirt</p>
        <p className='space-x-5'><span>Color : pink</span> <span>Size : L</span></p>
        <p>Seller : mahato</p>
        <p>₹489</p>
    </div>

</Grid>

<Grid item >
        <Box sx={{color:deepPurple[500]}}>
            <StarIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl' />
            <span>Rate and Review Product</span>
        </Box>
</Grid>

</Grid>)}
       
      </Grid>
    </div>
  )
}

export default OrderDetails
