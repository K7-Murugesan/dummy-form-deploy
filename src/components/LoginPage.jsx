import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Button } from '@mui/material';

const LoginPage = () => { // Stateless-Dumb-Presentational

    let [fullName, setFullName] = useState("");
    let [email, setEmail] = useState("");
    let [formData, setFormData] = useState({});

    let handleSubmit = () =>{
        setFormData( {fullName,email} );
    }

    return (
        <Box sx={{ width: "70%", margin: "auto"}}>
            <form style={{display:"grid", gap:"20px"}} onSubmit={handleSubmit} >
                <TextField fullWidth
                    type='text'
                    sx={{ margin: "10px 0" }}
                    label="Enter Your Name"
                    id="fullWidth"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <TextField fullWidth
                    type='email'
                    required
                    label="Enter Your mail"
                    id="fullWidth"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />      
               <Button sx={{ width: "70%", margin: "auto"}} variant="contained"  type='submit'>
                    Contained
                </Button>
            </form>
            <h1> {fullName} {email} </h1>
            
        </Box>
    )
}

export default LoginPage