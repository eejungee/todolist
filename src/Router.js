import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Signin from "./pages/Signin/Signin";
import ToDo from "./pages/ToDo/ToDo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
