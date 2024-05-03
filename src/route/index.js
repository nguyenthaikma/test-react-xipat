import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LayoutApp from "../layout";
import NotFound from "../screens/404";
import Home from "../screens/Home";

function RouteApp() {
  const route = [
    {
      path: "/",
      element: (
        <LayoutApp>
          <Home />
        </LayoutApp>
      ),
    },
    {
      path: "*",
      element: (
        <LayoutApp>
          <NotFound />
        </LayoutApp>
      ),
    },
  ];

  const router = createBrowserRouter(route);

  return <RouterProvider router={router} />;
}

export default RouteApp;
