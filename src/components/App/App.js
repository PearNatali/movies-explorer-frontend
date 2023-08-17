// import { useState, useEffect } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <Main/>
        }/>
        <Route path="/"/>
        <Route path="/signup" element={
        <Register/>
        }/>
        <Route path="/signin" element={
          <Login/>
        }/>
        <Route path="/profile" element={
          <Profile/>
        }/>
        <Route path="/movies" element={
          <Movies/>
        }/>
        <Route path="/saved-movies" element={
          <Movies/>
        }/>
      </Routes>
    </div>
  );
}

export default App;