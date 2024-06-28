import { Button, Col, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTest, getNumber } from "../../redux/action/number";

const { Title } = Typography;

export default function Dashboard() {
  // const path = useLocation();
  // const navigate = useNavigate();
  // const typeChart = path.pathname.split("/").pop();

  // // Fake data chart
  // const seriesLineChart = useMemo(
  //   () => [
  //     {
  //       name: "Data - 1",
  //       data: [25, 29, 33, 30, 32, 32, 33],
  //     },
  //     {
  //       name: "Data - 2",
  //       data: [12, 11, 14, 18, 17, 13, 13],
  //     },
  //   ],
  //   []
  // );
  // const seriesColumnChart = useMemo(
  //   () => [
  //     {
  //       name: "Data - 1",
  //       data: [28, 29, 33, 36, 32, 32, 33, 29, 34, 28, 26, 25],
  //     },
  //     {
  //       name: "Data - 2",
  //       data: [12, 11, 14, 18, 17, 13, 13, 15, 12, 16, 14, 15],
  //     },
  //   ],
  //   []
  // );

  const test = useSelector((state) => state.testReducer.test);
  let a = 1;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNumber());
  }, [dispatch]);

  const handlePush = () => {
    a++
    dispatch(addTest({ maBanner: a }));
    a = 0
  };

  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <Title level={5}>Dashboard</Title>
      </Col>
      <Col span={24}>
        <Button onClick={handlePush}>Push</Button>
      </Col>
      <Row>
        <Col span={24}>
          {test.map((v, i) => (
            <Button onClick={() => dispatch(addTest({ maBanner: i }))} key={i}>
              {v.maBanner}
            </Button>
          ))}
        </Col>
      </Row>
      {/* <Col span={24}>
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
      </Col> */}
      {/* <Col span={24}>
        {typeChart === "subcription" ? (
          <LineChart series={seriesLineChart} />
        ) : (
          <ColumnChart series={seriesColumnChart} />
        )}
      </Col> */}
    </Row>
  );
}
