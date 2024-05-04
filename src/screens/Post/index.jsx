import { Col, Row, Typography } from "antd";
import React from "react";

const { Title } = Typography;

export default function Post() {


  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <Title level={5}>Post</Title>
      </Col>
 
    </Row>
  );
}
