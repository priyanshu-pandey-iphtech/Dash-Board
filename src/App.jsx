import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from './Components/Signup'
import Login from './Components/Login'
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import E_commerce from './Components/E_commerce';
import Documentation from './Components/Documentation';
import User from './Components/User';
import Chart from './Components/Chart';
import Core from './Components/Core';
import Forms from './Components/Forms';
import UI_elements from './Components/UI_elements';
import Table from './Components/Table';
import Grid from './Components/Grid';
import Map from './Components/Map';
import Extra from './Components/Extra';
import Menu_level from './Components/Menu_level';
import Library from './Components/Library';
import Support from './Components/Support';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/e_commerce" element={<E_commerce />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/user" element={<User />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/core" element={<Core />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/ui_elements" element={<UI_elements />} />
          <Route path="/table" element={<Table />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/map" element={<Map />} />
          <Route path="/extra" element={<Extra />} />
          <Route path="/menu_level" element={<Menu_level />} />
          <Route path="/library" element={<Library />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
