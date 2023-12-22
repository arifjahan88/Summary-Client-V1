import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import CanvaPage from "../Components/CanvasPage/CanvaPage";
import PaintingType from "../Components/PaintingTypePage/PaintingType";
import DelivaryDate from "../Components/DelivaryDatePage/DelivaryDate";
import UploadFile from "../Components/UploadFile/UploadFile";
import OrderSummary from "../Components/OrderSummary/OrderSummary";
import AdminDashboard from "../Components/AdminDashboard/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/canva",
    element: <CanvaPage />,
  },
  {
    path: "/canva/painting-type",
    element: <PaintingType />,
  },
  {
    path: "/canva/painting-type/delivary-date",
    element: <DelivaryDate />,
  },
  {
    path: "/canva/painting-type/delivary-date/upload-image",
    element: <UploadFile />,
  },
  {
    path: "/canva/painting-type/delivary-date/upload-image/order-summary",
    element: <OrderSummary />,
  },
  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
  },
]);
