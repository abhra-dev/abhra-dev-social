import { createBrowserRouter } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World!!</h1>,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default Router;
