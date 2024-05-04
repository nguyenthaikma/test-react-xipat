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

  // Fake data chart
  const seriesLineChart = useMemo(
    () => [
      {
        name: "Data - 1",
        data: [25, 29, 33, 30, 32, 32, 33],
      },
      {
        name: "Data - 2",
        data: [12, 11, 14, 18, 17, 13, 13],
      },
    ],
    []
  );
  const seriesColumnChart = useMemo(
    () => [
      {
        name: "Data - 1",
        data: [28, 29, 33, 36, 32, 32, 33, 29, 34, 28, 26, 25],
      },
      {
        name: "Data - 2",
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
        {typeChart === "subcription" ? (
          <LineChart series={seriesLineChart} />
        ) : (
          <ColumnChart series={seriesColumnChart} />
        )}
      </Col>
    </Row>
  );
}
