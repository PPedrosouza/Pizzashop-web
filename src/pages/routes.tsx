import {
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./app/dashboard";
import { Signin } from "./auth/sign-in";

export const router = createBrowserRouter([
    { path : '/', element: <Dashboard/> },
    { path : '/sign-in', element: <Signin/> },
])