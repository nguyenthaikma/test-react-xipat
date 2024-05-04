import { ProfileOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Input,
  Row,
  Spin,
  Table,
  Typography
} from "antd";
import React, { useEffect, useState } from "react";
import { useQueryListPost } from "../../queries/post";
import ModalDetail from "./components/ModalDetail";

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
        <Col span={24}>
          {isLoadingListPost ? (
            <div className="lazy-loading-app">
              <Spin />
            </div>
          ) : (
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
          )}
        </Col>
      </Row>
      <ModalDetail detailPost={detailPost} setDetailPost={setDetailPost} />
    </React.Fragment>
  );
}
