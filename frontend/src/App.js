import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Login from './Components/Login'
import Signup from './Components/Signup'
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import AdminScreen from './Components/AdminScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route  path ="/" exact element={<HomeScreen />} />
              <Route  path ="/login" exact element= {<Login />} />
              <Route  path ="/signup" exact element= {<Signup />} />
              <Route  path ="/profile" element={<ProfileScreen />}/>
              <Route path="/admin" element={<AdminScreen/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
