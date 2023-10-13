import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const PrivateRouter = ({ component: Component, ...props }) => {
  return Auth.getUserDetails() !== undefined &&
    Auth.getUserDetails() !== null &&
    Auth.getToken() !== undefined ? (
    <Component {...props} />
  ) : (
    <Navigate to="/PageNotFound" />
  );
};

function AppRoutes() {
  return (
    <div>
      <Router ref={registerNav}>
        <Routes>
          {HomeRoutes.map((homeRoute, index) => (
            <Route
              key={index}
              path={homeRoute.path}
              element={
                <homeRoute.layout>
                  <homeRoute.component />
                </homeRoute.layout>
              }
            />
          ))}

          {PrivateRoutes.map((privateRoute, index) => (
            <Route
              key={index}
              path={privateRoute.path}
              element={
                <PrivateRouter
                  component={privateRoute.component}
                  layout={privateRoute.layout}
                />
              }
            />
          ))}

          <Route path="/PageNotFound" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
