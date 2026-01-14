import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SimpleLayout from "./layout/SimpleLayout";

// Guide pages
import PWAAppGuide from "./pages/PWA_app_guide_v2";
import PortalGuide from "./pages/portal_visual_guide";

const router = createBrowserRouter([
  {
    element: <SimpleLayout />,
    children: [
      {
        path: "/",
        element: <PWAAppGuide />,
      },
      {
        path: "/pwa-app",
        element: <PWAAppGuide />,
      },
      {
        path: "/portal",
        element: <PortalGuide />,
      },
    ],
  },
], {
  basename: "/guides"
});

export const AppRouter = () => <RouterProvider router={router} />;
