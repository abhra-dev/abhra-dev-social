import { createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World!!</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default Router;
