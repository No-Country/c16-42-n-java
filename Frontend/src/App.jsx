import './App.css'
import Banner from './components/banner/Banner'
import { Navbar } from './components/navbar/NavBar'


//importamos las librerias
import { useState, useEffect, useReducer } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//Importamos los estilos
import './App.css'
import Landing from './views/landing/landing';
import Login from './views/Login/login';
//Importamos las vistas

export default function App() {
  

  return (
    <div className='app'>
        
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element= {<Login />} />
        </Routes>
    </div>
  )
}


