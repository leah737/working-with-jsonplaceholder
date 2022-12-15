import React from "react";
import { Routes, Route } from "react-router-dom";

import Blog from "./components/Blog";
import Home from "./components/Home";
import UsersAndTODOList from "./components/UsersAndTODOList";

const routes = [
  {
    path: "/",
    title: "Home",
    Component: Home,
  },
  {
    path: "/todo-list",
    title: "Users and TODO List",
    Component: UsersAndTODOList,
  },
  {
    path: "/blog",
    title: "Blog",
    Component: Blog,
  },
];

const RouterSwitch = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path}>
            <route.Component />
          </Route>
        );
      })}
    </Routes>
  );
};

export { RouterSwitch };

export default routes;
