import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main/Main";
import Home from "../components/pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />,
        }
      ]
    },
  ]);

export default router;