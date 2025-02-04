import Main from "@/Layout/Main";
import Login from "@/Page/Login/Login";
import SignUp from "@/Page/SignUp/SignUp";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            index: true,
            element: <Login />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "signUp",
            element: <SignUp />,
          },
    ],
  },
]);
export default router;
