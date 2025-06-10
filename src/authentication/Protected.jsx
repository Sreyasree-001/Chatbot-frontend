import React from 'react'

const Protected = ({children}) => {
    const token = localStorage.getItem("token");
    if (!token) {
    return <Navigate to="/" />; 
  }
  return children;
}

export default Protected