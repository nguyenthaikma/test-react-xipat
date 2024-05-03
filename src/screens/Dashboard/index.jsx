import { Button, Col, Row, Space, Typography } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ColumnChart from "../../components/ColumnChart";
import LineChart from "../../components/LineChart";
import { ROUTE_PATH } from "../../route/const";

const { Title } = Typography;

export default function Dashboard() {
  const path = useLocation();
  const navigate = useNavigate();

  const typeChart = path.pathname.split("/").pop();

  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <Title level={5}>Dashboard</Title>
      </Col>
      <Col span={24}>
        <Space size={8}>
          <Button
            size="small"
            type={typeChart === "subcription" ? "primary" : "default"}
            onClick={() => navigate(ROUTE_PATH.DASHBOARD_SUBCRIPTION)}
          >
            Subcription
          </Button>
          <Button
            size="small"
            type={typeChart === "revenue" ? "primary" : "default"}
            onClick={() => navigate(ROUTE_PATH.DASHBOARD_REVENUE)}
          >
            Revenue
          </Button>
        </Space>
      </Col>
      <Col span={24}>
        {typeChart === "subcription" ? <LineChart /> : <ColumnChart />}
      </Col>
    </Row>
  );
}
