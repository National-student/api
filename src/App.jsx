import { Container } from "@mui/material";
import "./App.css";
import Cards from "./components/card/Cards";
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import User from "./components/user/User";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <Container maxWidth="xl">

      <ul>
        <li>
          <NavLink to="/">Post</NavLink>
        </li>
        <li>
          <NavLink to="/user">User</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/user" element={<User />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>

    </Container>
  );
}

export default App;
