"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useFormik } from 'formik';


export default function Forms(props) {
  
  
  const validate = values => {
    const errors = {};
  
    if (!values.name) {
      errors.name = 'Name is required';
    }
  
    if (!values.email) {
      errors.email = 'Email is required';
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.phone_number) {
      errors.phone_number = 'Phone number is required';
    }  
  
    return errors;
  };
  
  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      name: props.user.name,
      email: props.user.email,
      phone_number: props.user.phone_number,
    },
    validate,
    
    onSubmit:  (values,  { setSubmitting, resetForm }) => {
      {props.isMode==="Edit"?props.updateUser(props.user._id,values):props.createUser(values)}
      resetForm({});
    }
  });

  

  return (
    <>
      <h3 style={{textAlign:'center',paddingTop:"15px",marginTop:"15px"}}>{props.isMode} User</h3>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '100%' },
          pl: 10,pr: 10
        }}
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <TextField id="name" 
          label="Name" 
          name='name'
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name} 
          variant="outlined" 
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          disabled={props.isMode==="View"?"disabled":false}
          />

        <TextField id="email" 
          label="Email" 
          name='email'
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email} 
          variant="outlined" 
          error={!!formik.errors.email}
          helperText={formik.errors.email}
          disabled={props.isMode==="View"?"disabled":false}/>

        <TextField
            id="phone_number"
            name="phone_number"
            label="Phone Number"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.phone_number} 
            variant="outlined"
            error={!!formik.errors.phone_number}
            helperText={formik.errors.phone_number}
            disabled={props.isMode==="View"?"disabled":false}
          />
          {props.isMode==="Edit"?<><Button variant="contained" style={{backgroundColor: "#1976d2"}} type="submit">
            Update User
          </Button><Button style={{color: "#1976d2"}} type="button" onClick={()=>{
            props.setIsMode("Add");  props.setUser({
                "name":'',
                "email":'',
                "phone_number":"",
              })}}>
            Back
          </Button></>:""}
          {props.isMode==="Add"?<Button variant="contained" style={{backgroundColor: "#1976d2"}} type="submit">
            Add User
          </Button>:""}
          {props.isMode==="View"?<>
            <Button style={{color: "#1976d2"}} type="button" onClick={()=>{
              props.setIsMode("Add");  props.setUser({
                  "name":'',
                  "email":'',
                  "phone_number":"",
                })}}>
              Back
            </Button></>:""}
      </Box>
    </>
  );
}