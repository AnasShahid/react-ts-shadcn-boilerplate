import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layouts/root-layout";
import { authRoutes } from "@/modules/auth";
import { pricingRoutes } from "@/modules/pricing";
import HomePage from "@/pages/home";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      ...authRoutes,
      ...pricingRoutes,
    ],
  },
]);
