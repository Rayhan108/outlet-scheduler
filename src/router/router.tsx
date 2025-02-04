import Main from "@/Layout/Main";
import ChangePass from "@/Page/ChangePass/ChangePass";
import Congratulation from "@/Page/Congratulation/Congratulation";
import ForgotPass from "@/Page/ForgotPass/ForgotPass";

import Login from "@/Page/Login/Login";
import SignUp from "@/Page/SignUp/SignUp";
import ValidateEmail from "@/Page/ValidateEmail/ValidateEmail";
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
          {
            path: "forgotPass",
            element: <ForgotPass/>,
          },
          {
            path: "/validationCode",
            element: <ValidateEmail/>,
          },
          {
            path: "/changePass",
            element: <ChangePass/>,
          },
          {
            path: "/congratulation",
            element: <Congratulation/>,
          },
    ],
  },
]);
export default router;
