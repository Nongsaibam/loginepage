import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateAccount } from './component/CreateAccount';
import Login from './component/Login';
import UserProfile from './component/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;


