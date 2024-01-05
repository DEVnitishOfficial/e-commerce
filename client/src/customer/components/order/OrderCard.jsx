
import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
function OrderCard() {
    const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=' p-5 shadow-md shadow-gray-500 hover:shadow-2xl border cursor-pointer'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6} className='flex'>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/t/g/j/s-bb-polo-tshirt-more-more-original-imagm7fzbf3q23yp.jpeg?q=70" alt="" />
                    </div>
                    <div className='spacy-y-2 ml-5'>
                        <p>Men Solid Polo Neck Poly Cotton Maroon T-Shirt</p>
                        <p className='opacity-50 text-xs font-semibold mt-1'>Size : L</p>
                        <p className='opacity-50 text-xs font-semibold mt-2'>Color : Black</p>
                    </div>
            </Grid>
            <Grid item xs={2}>
                    <p>₹349</p>
            </Grid>
            <Grid item xs={4}>
                   {true && <div>
                    <p>
                    <AdjustIcon sx={{width:"15px",height:"15px", }} className='text-green-500 mr-2 text-sm' />
                        <span>Deliverd On March</span>
                    </p>
                    <p className='text-xs'>Your item has been delivered</p>
                   </div>
                    }
                   {false && <p>
                        <span>Expected delivery on march 03</span>
                    </p>}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCard