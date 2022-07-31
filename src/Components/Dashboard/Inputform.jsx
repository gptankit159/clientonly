import React from "react";
import { useState } from "react";
import { NativeSelect } from "@mui/material";
// import './inputform.css'
const Inputform = (props) => {
  const [questions, setQuestions] = useState([""]);
  const [topic, setTopic] = useState("");
  const [date, setdate] = useState("");
  const [questionid, setquestionid] = useState("");
  const addquestion = (e) => {
    e.preventDefault()
    setQuestions((prevNames) => [...prevNames, questionid]);
    setquestionid("");
    console.log(date);
    console.log(topic);
    console.log(questions);
  };
  const sec = localStorage.getItem('section')
  const handleinput = async (e) => {
    e.preventDefault()
    const req = await fetch('http://localhost:3001/createTopic',{
        method:"POST",
        headers:{
            'Content-Type':'application/json',
            'x-access-token' : localStorage.getItem('token'), 
        },
        body: JSON.stringify({
            date,topic,questions,sec
        })
    })
    const data = await req.json()
    console.log(data);
    if(data.status=== 'ok'){
        // setQuote(tempquote)
        // setTempquote('')
    }else{
        alert(data.error)
    }
    console.log(date);
    console.log(topic);
    console.log(questions);
  };
  return (
    <>
    <h1>Section {sec}</h1>
     <div className="contact__container container">
      <form>
        <input
          id="topic"
          name="topic"
          type="text"
          placeholder="topic"
          onChange={(event) => setTopic(event.target.value)}
          value={topic}
        />
        <br />
        <input
          id="question"
          name="questions"
          type="text"
          placeholder="questions"
          onChange={(event) => setquestionid(event.target.value)}
          value={questionid}
        />
        <div className="questions">
          {questions.map((element, index) => {
            return (
              <div key={index}>
                <h2>{element}</h2>
              </div>
            );
          })}
        </div>
        <button onClick={addquestion} className="btn btn-primary">
          Add questions
        </button>
        <br />
        <input
          type="date"
          onChange={(event) => setdate(event.target.value)}
          value={date}
        /> <br /><br />
        <button type="submit" onClick={handleinput}>
          Submit form
        </button>
      </form>
      </div>
    </>
  );
};
export default Inputform;
