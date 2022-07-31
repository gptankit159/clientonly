import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,Grid,Typography,Card,CardContent,TextField,Button} from "@mui/material";

 const Register=()=>{
     const [name,setName] = useState('')
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const navigate = useNavigate()
     async function registerUser(event){
      event.preventDefault();
      const response = await fetch('http://localhost:3001/api/register',{
        method : "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          name,email,password
        })
      })
  
      const data = await response.json()
      console.log(data);
      if(data.status === 'ok'){
        navigate("/login")
      }
    }


    // const classes = useStyles();
    return(
      <>

        <div className="form"> 
        <Container >
        <Card Container spacing={6}>    
        <Typography gutterTop variant="h3" align ="center">Register</Typography>
    <Card>
        <CardContent>
            <form onSubmit={registerUser} >
            <Grid  container
          spacing={5}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}>
                <Grid item xs={12} md={6}>
                    <TextField type="text" label="Name" placeholder='TeamAlfa' variant="outlined" required="true" value={name} onChange={e=>setName(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField type="email" label="Email id" placeholder='abc@xyc.com' variant="outlined" required="true" value={email} onChange={e=>setEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={7} >
                    <TextField type="password" label="Password" placeholder='password' variant="outlined" required="true" value={password} onChange={e=>setPassword(e.target.value)} />
                </Grid>
                
                <Grid item xs={12} md={6}>
                <Button type="submit" variant="contained" >Submit</Button>
                </Grid>
            </Grid>
            </form>
        </CardContent>
    </Card>
    </Card>
    </Container>
    </div>
       
       
    </>
    );
};

export default Register;

