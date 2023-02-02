import React from "react";
import Home from "./page/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMovie from "./components/allMovie/AllMovie";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import Detail from "./page/detail/Detail";
import { allMovies } from "./ListMovieData";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
          </Route>
          <Route path="/register">
            <Route index element={<Register />} />
          </Route>
          <Route path="/home">
            <Route index element={<Home />} />
          </Route>
          <Route path="/detail/:id">
            <Route index element={<Detail />} />
          </Route>
          <Route path="/see all/:title">
            <Route index element={<AllMovie lists={allMovies} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
