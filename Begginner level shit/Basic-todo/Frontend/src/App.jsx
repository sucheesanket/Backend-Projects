import React from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { useSelector } from 'react-redux'

function App() {
  const { user } = useSelector((state) => state.auth);

  return user ? <Dashboard /> : <Login />;
}

export default App;
