import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import LayoutApp from "../layout";
import NotFound from "../screens/404";
import { Lazyload, ROUTE_PATH } from "./const";

const Dashboard = Lazyload(() => import("../screens/Dashboard"));
const Post = Lazyload(() => import("../screens/Post"));
const Setting = Lazyload(() => import("../screens/Setting"));

function RouteApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={ROUTE_PATH.DASHBOARD_SUBCRIPTION} replace />,
    },
    {
      path: ROUTE_PATH.DASHBOARD_SUBCRIPTION,
      element: (
        <LayoutApp>
          <Dashboard />
        </LayoutApp>
      ),
    },
    {
      path: ROUTE_PATH.DASHBOARD_REVENUE,
      element: (
        <LayoutApp>
          <Dashboard />
        </LayoutApp>
      ),
    },
    {
      path: ROUTE_PATH.POST,
      element: (
        <LayoutApp>
          <Post />
        </LayoutApp>
      ),
    },
    {
      path: ROUTE_PATH.SETTING,
      element: (
        <LayoutApp>
          <Setting />
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
  ]);

  return <RouterProvider router={router} />;
}

export default RouteApp;
