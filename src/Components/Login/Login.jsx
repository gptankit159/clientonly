import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Container,Grid,Typography,Card,CardContent,TextField,Button} from "@mui/material";

 const Login=()=>{
     const [email,setEmail] = useState('')
     const [password,setPassword] = useState('')
     const navigate = useNavigate()
     async function loginUser(event){
        event.preventDefault();
        const response = await fetch('http://localhost:3001/api/login',{
          method : "POST",
          headers:{
            'Content-Type': 'application/json',
          },
          body : JSON.stringify({
            email,password
          })
        })
    
        const data = await response.json()
        if(data.user){
          localStorage.setItem('token', data.user)
          window.location.href = '/dashboard'
        }else{
          alert("Please check")
        }
        console.log(data.user);
      }


    // const classes = useStyles();
    return(
        <div className="form"> 
        <Container >
        <Card Container spacing={6}>    
        <Typography gutterTop variant="h3" align ="center">Login</Typography>
    <Card>
        <CardContent>
            <form onSubmit={loginUser} >
            <Grid  container
          spacing={5}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}>
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
       
       
    );
};

export default Login;

