import React from 'react'
import {Routes,Route } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup'
import ProfileScreen from './Components/ProfileScreen';
import AdminScreen from './Components/AdminScreen';
import ForgotPassward from './Components/ForgotPassward';
import NavBar from './Components/NavBar';
import HomePage from './Components/TopSec';
import HomeScreen from './Components/HomeScreen';
import Hospital from './Pages/Hospital/Components/Hospital'

function App() {
  return (
    <div>
        <Routes>
              <Route  path ="/" exact element={<HomeScreen />} />
              <Route  path ="/login" exact element= {<><NavBar/><Login /></>} />
              <Route  path ="/signup" exact element= {<><NavBar/><Signup /></>} />
              <Route  path ="/profile" element={<ProfileScreen />}/>
              <Route  path ="/forgotpassword" element={<ForgotPassward />}/>
              <Route path="/admin" element={<AdminScreen />}></Route>
              <Route path="/hospital" element={<Hospital />}></Route>
        </Routes>
    </div>
  )
}

export default App