import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import AddressCard from '../addressCard/AddressCard'
import { createOrder } from '../../../Redux/Customers/Order/Action'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function DeliveryAddressForm ({ handleNext }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  console.log('auth>>>>>>>>>>>>>',auth)
  const [selectedAddress, setSelectedAdress] = useState(null);

    const handleFormSubmit= (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const address = {
            firstName : data.get("firstName"),
            lastName : data.get("lastName"),
            streetAddress : data.get("address"),
            city : data.get("city"),
            state : data.get("state"),
            zipCode : data.get("zip"),
            mobile : data.get("phoneNumber")
        }
        dispatch(createOrder({ address, jwt, navigate }));
        handleNext();
    }

    const handleCreateOrder = (item) => {
      dispatch(createOrder({ address:item, jwt, navigate }));
      handleNext();
    };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'
        >
          <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
          {auth.user?.address?.map((item) => (
            <div
              onClick={() => setSelectedAdress(item)}
              className="p-5 py-7 border-b cursor-pointer"
            >
              {" "}
              <AddressCard address={item} />
              {selectedAddress?.id === item.id && (
                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={()=>handleCreateOrder(item)}
                >
                  Deliverd Here
                </Button>
              )}
            </div>
          ))}
        </Box>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className='border rounded-s-md shadow-md p-5'>
            <form onSubmit={handleFormSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='FirstName'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='LastName'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id='address'
                    name='address'
                    label='Address'
                    fullWidth
                    autoComplete='given-name'
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='city'
                    name='city'
                    label='City/Village'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='state'
                    name='state'
                    label='State/Province/Region'
                    fullWidth
                    autoComplete='given-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='zip'
                    name='zip'
                    label='Zip/Postal code'
                    fullWidth
                    autoComplete='shipping postal code'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id='phoneNumber'
                    name='phoneNumber'
                    label='Phone Number'
                    fullWidth
                    autoComplete='given-phoneNumber'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                  type='submit'
                    size='large'
                    variant='contained'
                    sx={{ py:1.5, mt: 2, bgcolor: 'RGB(145 85 253)' }}
                  >
                    Deliver here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default DeliveryAddressForm
