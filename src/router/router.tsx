import Main from "@/Layout/Main";
import Login from "@/Page/Login/Login";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index:true,
        element:<Login/>
      },
    ],
  },
]);
export default router;
