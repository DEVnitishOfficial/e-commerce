import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../../../Redux/auth/Action';

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { auth } = useSelector((store) => store);

    const jwt = localStorage.getItem("jwt")


    useEffect(() => { 
      if(jwt){
        // dipatching a action means we are sending the action to the store
        dispatch(getUser())
      }
    },[jwt,auth.jwt])

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const userData={
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          password: data.get("password"),
          
        }
        dispatch(register(userData))
        console.log("user data",userData);

        // dispatch:
      // dispatch is a function provided by Redux that is used to send actions to the Redux store. It is a core concept in Redux and is the way to trigger state changes.

      // register(userData):
      // register is likely a Redux action creator function. In Redux, action creators are functions that return action objects. An action object typically has a type property that indicates the type of action and may include additional data in the payload property.

      // Dispatching the Action:
      // The dispatch(register(userData)) line is dispatching the action created by the register action creator. This will trigger the corresponding reducer to handle the action and update the state in the Redux store.

      // Dispatch Function:
     // In Redux, the dispatch function is provided by the store. It is used to send actions to the store, notifying it of a state change.

    //  When an action is dispatched, the corresponding reducer(s) respond to that action and update the state accordingly.

    // Actions are dispatched using dispatch(action), where action is an object with a type property and optionally a payload or other properties.

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
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
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="given-name"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{padding:".8rem 0"}}
            >
              Register
            </Button>
          </Grid>

            </Grid>
        </form>
        <div className="flex justify-center flex-col items-center">
     <div className="py-3 flex items-center ">
        <p className="m-0 p-0">if you have already account ?</p>
        <Button onClick={()=> navigate("/login")} className="ml-5" size="small">
          Login
        </Button>
      </div>
</div>
    </div>
  )
}

export default RegisterForm