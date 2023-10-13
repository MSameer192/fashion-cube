/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { Component } from "react";
import { Navigate } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

var routes = [
  {
    path: "/fashion-cube",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },
  {
    path: "/",
    layout: BaseLayout,
    component: () => <Navigate to="/fashion-cube" />,
  },
  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Navigate to="/fashion-cube" />,
  },
  {
    path: "/fashion-cube/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/fashion-cube/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
];

export default routes;
