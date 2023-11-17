import React from 'react'
import {Routes,Route } from 'react-router-dom';

import Login from './Components/Login'
import Signup from './Components/Signup'
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import AdminScreen from './Components/AdminScreen';
import ForgotPassward from './Components/ForgotPassward';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
        <Routes>
              <Route  path ="/" exact element={<HomeScreen />} />
              <Route  path ="/login" exact element= {<Login />} />
              <Route  path ="/signup" exact element= {<Signup />} />
              <Route  path ="/profile" element={<ProfileScreen />}/>
              <Route  path ="/forgotpassword" element={<ForgotPassward />}/>
              <Route path="/admin" element={<AdminScreen/>}></Route>
        </Routes>
    </div>
  )
}

export default App