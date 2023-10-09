import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./components/Screens/Home";
import About from "./components/Screens/About";
import Contact from "./components/Screens/Contact";
import NavBar from './components/NavBar';
import { Grid } from '@mui/material';

const App = () => {
  return (
    <>
    <Router>
        <NavBar/>
        <Grid style={{marginTop:'70px'}}>
          <Routes>          
            <Route path='/' exact element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} /> 
          </Routes>        
        </Grid>
    </Router>
    </>
  )
}

export default App;