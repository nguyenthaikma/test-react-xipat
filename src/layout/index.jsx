import {
  DashboardOutlined,
  ReadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTE_PATH } from "../route/const";

const { Content, Sider } = Layout;

export default function LayoutApp({ children }) {
  const location = useLocation();
  const { pathname } = location;

  // Set document Title
  const [documentTitle, setDocumentTitle] = useState("Dashboard");
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  const menuItems = [
    {
      icon: DashboardOutlined,
      label: "Dashboard",
      route: ROUTE_PATH.DASHBOARD_SUBCRIPTION,
    },
    {
      icon: ReadOutlined,
      label: "Post Management",
      route: ROUTE_PATH.POST,
    },
    {
      icon: SettingOutlined,
      label: "Setting",
      route: ROUTE_PATH.SETTING,
    },
  ];

  const items = menuItems.map((menuItems) => {
    return {
      key: menuItems.route,
      icon: React.createElement(menuItems.icon),
      label: (
        <Link
          onClick={() => setDocumentTitle(menuItems.label)}
          to={menuItems.route}
        >
          {menuItems.label}
        </Link>
      ),
    };
  });
  return (
    <Layout className="app-container">
      <Layout>
        <Sider width={200} className="layout-sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={[pathname]}
            className="menu"
            items={items}
          />
        </Sider>
        <Layout className="layout-content">
          <Content className="children">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
