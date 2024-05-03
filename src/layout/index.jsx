import {
  DashboardOutlined,
  ReadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;

export default function LayoutApp({ children }) {
  const menuItems = [
    {
      icon: DashboardOutlined,
      label: "Dashboard",
      route: "/",
    },
    {
      icon: ReadOutlined,
      label: "Post Management",
      route: "/posts",
    },
    {
      icon: SettingOutlined,
      label: "Setting",
      route: "/setting",
    },
  ];

  const items = menuItems.map((menuItems, index) => {
    const key = String(index + 1);
    return {
      key: `item-${key}`,
      icon: React.createElement(menuItems.icon),
      label: <Link to={menuItems.route}>{menuItems.label}</Link>,
    };
  });
  return (
    <Layout className="app-container">
      <Layout>
        <Sider
          width={200}
          style={{
            background: "#fafafa",
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              background: "#fafafa",
            }}
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
            background: "#fff",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: "#fff",
              borderRadius: 20,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
