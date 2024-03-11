import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import ParentClass from './components/ParentClass';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Career from './components/About_Page/Career';
import Placement from './components/About_Page/Placement';
import NotFound from './components/NotFound';
import ParentComponent from './components/childTOParent/ParentComponent';
import { useState } from 'react';
// import LoginPage from './components/LoginPage';
// import { useNavigate } from 'react-router-dom';`

function App() {

  

  return (
    <div className="App">
      <h1>Login Page</h1>
      {/* <LoginPage/> */}
      <Welcome />
      <ParentClass />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route index element={<Career/>} />
              {/* index route is used to display the component
               to its parent level */}
          <Route path='career' element={<Career />} />
          <Route path='placement' element={<Placement />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <ParentComponent/>
    </div>
  );
}

export default App;
