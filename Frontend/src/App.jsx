import './App.css'
import Banner from './components/banner/Banner'
import { Navbar } from './components/navbar/NavBar'


//importamos las librerias
import { useState, useEffect, useReducer } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//Importamos los estilos
import './App.css'
//Importamos las vistas
import Landing from './views/landing/landing';
import Login from './views/Login/login';
import Info from './views/info/info';

export default function App() {
  

  return (
    <div className='app'>
        
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element= {<Login />} />
          <Route path='/info' element= {<Info />} />
        </Routes>
    </div>
  )
}


