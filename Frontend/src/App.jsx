import { Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './views/landing/landing';
import Login from './views/Login/login';
import Info from './views/info/info';

export default function App() {


  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/info' element={<Info />} />
      </Routes>
    </div>
  )
}


