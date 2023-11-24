import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main/Main";
import Home from "../components/pages/Home/Home";
import ProductDetails from "../components/pages/Home/LatestProductSection/ProductTab/ProductDetails/ProductDetails";
import DashBoard from "../components/layout/DashBoard/DashBoard";
import DashboardPages from "../components/pages/Dashboard/DashboardPages";
import AddProductPage from "../components/pages/AddProduct/AddProductPage";

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
    },{
      path: "dashboard",
      element: <DashBoard />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardPages />
        },
        {
          path: "/dashboard/addProduct",
          element: <AddProductPage />
        }
      ]
    }
  ]);

export default router;