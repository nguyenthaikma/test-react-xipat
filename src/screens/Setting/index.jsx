import {
  Button,
  Col,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import React, { useState } from "react";

const { Title } = Typography;
const { RangePicker } = DatePicker;

export default function Setting() {
  // Define state
  const [textColor, setTextColor] = useState(false);
  const [isChangeValue, setIsChangeValue] = useState(false);

  const onValuesChange = (_, values) => {
    setIsChangeValue(Object.keys(values).some((key) => values[key]));
  };
  const onFinish = (values) => {
    console.log("🚀🚀🚀 ~ onFinish ~ Setting:", values);
  };

  return (
    <Row gutter={[0, 6]}>
      <Col span={24}>
        <Title level={5}>Setting</Title>
      </Col>
      <Col span={12}>
        <Form
          className="form-input"
          layout="vertical"
          onValuesChange={onValuesChange}
          onFinish={onFinish}
        >
          <Row gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter title!",
                  },
                ]}
                name="title"
                label="Title:"
              >
                <Input placeholder="Enter title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter email!",
                  },
                  {
                    type: "email",
                    message: "Email is invalid!",
                  },
                ]}
                name="email"
                label="Email:"
              >
                <Input placeholder="Enter email" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please enter background!",
                  },
                ]}
                name="background"
                label="Background Color:"
              >
                <Input
                  style={{ color: textColor }}
                  placeholder="Enter background color"
                  addonAfter={
                    <ColorPicker
                      onChange={(v) => {
                        setTextColor(v.toHexString());
                      }}
                      size="small"
                    />
                  }
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please pick active date!",
                  },
                ]}
                name="date"
                label="Active date:"
              >
                <RangePicker className="w-full" />
              </Form.Item>
            </Col>
            {isChangeValue && (
              <Col span={12}>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Col>
            )}
          </Row>
        </Form>
      </Col>
    </Row>
  );
}
