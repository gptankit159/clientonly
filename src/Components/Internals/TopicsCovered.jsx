import React, { useState,useEffect } from 'react';
import {Container,Grid,Typography,Card,CardContent,CardActionArea,CardMedia,Button} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import Inputform from '../Dashboard/Inputform'
import { textAlign } from '@mui/system';

const Dashboard=()=>{
    const navigate = useNavigate()

    useEffect(()=>{ 
        const token = localStorage.getItem('token')
        console.log(token);
        if(token){
            const user = jwt_decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }else{
                console.log("populate");
            }
        }else{
            console.log("no token found");
            navigate('/login')
        }
    },[])
    

   return(
        <>
        <Navbar />
        < Inputform  />
        </>
       
   );
};

export default  Dashboard;

