import React, { useState,useEffect } from 'react';
import {Container,Grid,Typography,Card,CardContent,CardActionArea,CardMedia,Button} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import Inputform from './Inputform'
import Cards from './Cards'
const Dashboard=()=>{
    const navigate = useNavigate()
    async function loadDOM(){
        const req = await fetch('http://localhost:3001/dashboard',{
            headers:{'x-access-token': localStorage.getItem('token'),
            }
        })
        const data = await req.json()
        console.log(data);
        if(data.status!== 'ok'){
            alert(data.error)
        }
    }

    useEffect(()=>{ 
        const token = localStorage.getItem('token')
        console.log(token);
        if(token){
            const user = jwt_decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }else{
                loadDOM()
                console.log("populate");
            }
        }else{
            console.log("no token found");
            navigate('/login')
        }
    },[])
    
const loadTopics = (e)=>{
    console.log(e.target.value)
    localStorage.setItem("section",e.target.value)
    navigate('/topicsCovered')
}
const loadSchedule = (e)=>{
    console.log(e.target.value)
    localStorage.setItem("section",e.target.value)
    navigate('/schedule')
}
async function addNewClass(e){
    let sec = prompt("Please enter the Section");
    const req = await fetch('http://localhost:3001/createClass',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'x-access-token' : localStorage.getItem('token'), 
        },
        body: JSON.stringify({
            sec
        })
    })
    const data = await req.json()
    console.log(data);
}
   return(
       <>
       <Container >
                 <Navbar />
           <Typography color="textPrimary" gutterBottom variant="h4" align="center">Classes</Typography>
           <Grid container spacing={5}>
               <Grid item sm={4}>
               <Card>
                      <CardActionArea>
                       <CardMedia image="http://surl.li/cogiy" style={{height:250 ,width:300}}/>
                      <CardContent>
                           <Typography variant="h5">Section A</Typography>
                           <Button value="A" variant="contained" style={{margin:10}} onClick={loadTopics}>Topic Covered</Button>
                           <Button value="A" variant="contained" style={{margin:10}} onClick={loadSchedule}>Schedule</Button>
                       </CardContent>
                      </CardActionArea>
                   </Card>

               </Grid>
               <Grid item sm={4}>
               <Card>
                      <CardActionArea>
                       <CardMedia image="http://surl.li/cogiy" style={{height:250 ,width:300}}/>
                      <CardContent>
                           <Typography variant="h5">Section B</Typography>
                           <Button variant="contained" style={{margin:10}} >Topic Covered</Button>
                           <Button variant="contained" style={{margin:10}}>Schedule</Button>
                       </CardContent>
                      </CardActionArea>
                   </Card>

               </Grid>

           </Grid>
       <Button onClick={addNewClass}>Add New</Button>
       </Container> 
       </>
       
   );
};

export default  Dashboard;

