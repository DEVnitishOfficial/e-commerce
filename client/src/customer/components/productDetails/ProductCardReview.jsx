

import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductCardReview() {
  return (
    <div>
        <Grid container gap={2} spacing={2}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{height:'56',width:'56', bgcolor:'#9155fd'}}>K</Avatar>
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-semibold text-lg'>Kargil</p>
                        <p className='opacity-70'>January, 1, 2024</p>
                    </div>
                </div>
                <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
                <p> Nice product, looking very awesome and fit to me </p>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductCardReview