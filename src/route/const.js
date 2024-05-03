import { Spin } from "antd";
import { Suspense, lazy } from "react";

export const Lazyload = (ImportScreen) => {
  const LazyScreen = lazy(ImportScreen);
  return () => (
    <Suspense
      fallback={
        <div className="lazy-loading-app">
          <Spin />
        </div>
      }
    >
      <LazyScreen />
    </Suspense>
  );
};

export const ROUTE_PATH = {
  DASHBOARD_SUBCRIPTION: "/dashboard/subcription",
  DASHBOARD_REVENUE: "/dashboard/revenue",
  POST: "/post",
  SETTING: "/setting",
};
