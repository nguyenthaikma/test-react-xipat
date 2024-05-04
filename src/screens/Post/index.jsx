import { ProfileOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Descriptions,
  Input,
  Modal,
  Row,
  Spin,
  Table,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useQueryListPost } from "../../queries/post";

const { Title } = Typography;

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [detailPost, setDetailPost] = useState(null);

  const {
    data: queryPost,
    isLoading: isLoadingListPost,
    isError,
  } = useQueryListPost();
  useEffect(() => {
    setPosts(queryPost?.data || []);
  }, [queryPost]);

  const onSearch = (v) => {
    setPosts(posts.filter((post) => post.title.includes(v)));
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => {
        return a.id - b.id;
      },
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
      sorter: (a, b) => {
        return a.userId - b.userId;
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      width: "10%",
      key: "action",
      fixed: "right",
      render: (_, record) => (
        <Button
          onClick={() => {
            setDetailPost(record);
          }}
          icon={<ProfileOutlined />}
        />
      ),
    },
  ];

  if (isError) return <div>Error</div>;
  return (
    <React.Fragment>
      <Row gutter={[0, 6]}>
        <Col span={24}>
          <Title level={5}>Post Managament</Title>
        </Col>
        <Col span={6}>
          <Input.Search
            placeholder="Search by title"
            allowClear
            onSearch={onSearch}
            onChange={(e) => {
              if (e.type === "click") {
                setPosts(queryPost?.data);
              }
            }}
          />
        </Col>
        {isLoadingListPost ? (
          <Spin />
        ) : (
          <Col span={24}>
            <Table
              className="table-custom"
              columns={columns}
              dataSource={posts}
              rowKey="_id"
              pagination={{
                total: posts?.length,
                position: ["bottomLeft"],
              }}
            />
          </Col>
        )}
      </Row>
      <Modal
        width={600}
        onCancel={() => setDetailPost(null)}
        onOk={() => setDetailPost(null)}
        title={detailPost?.title?.toUpperCase() || "Detail"}
        open={!!detailPost}
      >
        {detailPost && (
          <Descriptions style={{ marginTop: 20 }} bordered layout="horizontal">
            <Descriptions.Item
              labelStyle={{ width: 100 }}
              label="User ID"
              span={3}
            >
              {detailPost.userId}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{ width: 100 }}
              label="Title"
              span={3}
            >
              {detailPost.title}
            </Descriptions.Item>
            <Descriptions.Item
              labelStyle={{ width: 100 }}
              label="Body"
              span={3}
            >
              {detailPost.body}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </React.Fragment>
  );
}
