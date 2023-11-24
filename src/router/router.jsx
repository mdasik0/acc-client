import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main/Main";
import Home from "../components/pages/Home/Home";
import ProductDetails from "../components/pages/Home/LatestProductSection/ProductTab/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "productDetails/:id",
            element: <ProductDetails />,
        }
      ]
    },
  ]);

export default router;