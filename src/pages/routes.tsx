import {
  createBrowserRouter,
} from "react-router-dom";
import { Dashboard } from "./app/dashboard";
import { Signin } from "./auth/sign-in";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { SignUp } from "./auth/sign-up";
import { Orders } from "./app/orders/orders";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <Signin /> },
      { path: '/sign-up', element: <SignUp /> }
    ],
  },
])