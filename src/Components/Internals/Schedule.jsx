import React, { useState,useEffect } from 'react';
import {Container,Grid,Typography,Card,CardContent,CardActionArea,CardMedia,Button} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import Inputform from '../Dashboard/Inputform'
import Cards from './Cards'
import { textAlign } from '@mui/system';

const Dashboard=()=>{
    const navigate = useNavigate()
    const [ques,setQues] = useState([''])
    const [data,setData] = useState([''])
    async function loadDOM(){
        const req = await fetch(`http://localhost:3001/topicsCovered/${localStorage.getItem('section')}`,{
            headers:{'x-access-token': localStorage.getItem('token'),
            }
        })
        const data = await req.json()
        // console.log(data);
        console.log(data.topics);
        // const questions = data.topics[0].questions
        // // console.log(questions);
        // setQues(questions)
        setData(data.topics)
        
        if(data.status!== 'ok'){
            alert(data.error)
        }
    }

    useEffect(()=>{ 
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt_decode(token)
            if(!user){
                localStorage.removeItem('token')
                navigate('/login')
            }else{
                loadDOM()
            }
        }else{
            console.log("no token found");
            navigate('/login')
        }
    },[])
    const topics = []
    data.forEach((topic) => {
        topics.push(<h3 className='student_name'>{topic.topicName} <Cards topic={topic} /> </h3>)
      })
   return(
        <>
        <Navbar />
        <div className="container">
            {topics}
        </div>
        </>
       
   );
};

export default  Dashboard;

