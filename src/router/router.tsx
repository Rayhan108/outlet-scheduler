import Main from "@/Layout/Main";
import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index:true
      },
    ],
  },
]);
export default router;
