import { Button, Col, Row, Space, Typography } from "antd";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ColumnChart from "../../components/ColumnChart";
import LineChart from "../../components/LineChart";
import { ROUTE_PATH } from "../../route/const";

const { Title } = Typography;

export default function Dashboard() {
  const path = useLocation();
  const navigate = useNavigate();

  const typeChart = path.pathname.split("/").pop();
  const series = useMemo(
    () => [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33, 29, 34, 28, 26, 25],
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13, 15, 12, 16, 14, 15],
      },
    ],
    []
  );

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
        {typeChart === "subcription" ? <LineChart series={series} /> : <ColumnChart series={series} />}
      </Col>
    </Row>
  );
}
