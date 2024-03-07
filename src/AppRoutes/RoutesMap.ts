import { lazy } from "react";
// import { Navigate } from "react-router-dom";

import type { AppRoute } from "./types";

const Home = lazy(() => import("@/pages/Home"));
const Signin = lazy(() => import("@/pages/Signin/Signin"));
const Signup = lazy(() => import("@/pages/Signin/Signup"));

class RoutesMap {
  // Private Routes
  static HOME: AppRoute = {
    title: "Home",
    path: "",
    subRoutes: {},
    Element: Home,
    // Skeleton: DashboardSkeleton,
    kind: "private",
  };

  // Public Routes
  static SIGNIN: AppRoute = {
    title: "Signin",
    path: "",
    subRoutes: {},
    Element: Signin,
    kind: "public",
  };

  static SIGNUP: AppRoute = {
    title: "Signup",
    path: "new",
    subRoutes: {},
    Element: Signup,
    kind: "public",
  };
  // static FORGET_PASSWORD: AppRoute = {
  //   title: "Forget Password",
  //   path: "forget-password",
  //   subRoutes: {},
  //   Element: ForgetPassword,
  //   kind: "public",
  // };

  // Independent Routes
  // static CONTROL_TOWER_SIGNIN: AppRoute = {
  //   title: "Control Tower Login",
  //   path: "signin/:loginId",
  //   subRoutes: {},
  //   Element: ControlTowerSignin,
  //   kind: "independent",
  // };
}

export default RoutesMap;
