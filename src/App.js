import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import TopicsCovered from "./Components/Internals/TopicsCovered"
import Schedule from "./Components/Internals/Schedule"
// function App() {
//   return(
//     <div>      
//       {/* <Navbar/>
//       <Dashboard/> */}
//       <Login/>
//     </div>
//   );
// }

// const Login = lazy(() => import('./pages/Login'));
// const Register = lazy(() => import('./pages/Register'));
// const Dashboard = lazy(() => import('./pages/Dashboard'));

const App = () => (
  <Router>
    {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/topicsCovered" element={<TopicsCovered />} />
        <Route path="/schedule" element={<Schedule />} />
        
      </Routes>
    {/* </Suspense> */}
  </Router>
);

export default App;
