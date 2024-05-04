import {
  ProfileOutlined,
  FilterOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Col, Input, Row, Space, Spin, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useQueryListPost } from "../../queries/post";
import ModalDetail from "./components/ModalDetail";

const { Title } = Typography;

export default function Post() {
  // Define state
  const [posts, setPosts] = useState([]);
  const [detailPost, setDetailPost] = useState(null);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchUserId, setSearchUserId] = useState("");

  // Fetch data
  const {
    data: queryPost,
    isLoading: isLoadingListPost,
    isError,
  } = useQueryListPost();
  useEffect(() => {
    setPosts(queryPost?.data || []);
  }, [queryPost]);


  // Filter
  const onFilter = () => {
    const dataPost = queryPost?.data || [];
    setPosts(
      dataPost.filter((post) => {
        const titleMatch = !searchTitle
          ? true
          : post.title.includes(searchTitle);
        const userIdMatch = !searchUserId
          ? true
          : post.userId === parseInt(searchUserId);

        return titleMatch && userIdMatch;
      })
    );
  };
  const onClear = () => {
    setSearchTitle("");
    setSearchUserId("");
    const dataPost = queryPost?.data || [];
    setPosts(dataPost);
  };

  // Table config
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
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
        <Col span={24}>
          <Row gutter={[6, 0]}>
            <Col span={6}>
              <Input
                placeholder="Title"
                value={searchTitle}
                onChange={(e) => {
                  setSearchTitle(e.target.value);
                }}
              />
            </Col>
            <Col span={6}>
              <Input
                placeholder="User ID"
                value={searchUserId}
                onChange={(e) => {
                  setSearchUserId(e.target.value);
                }}
              />
            </Col>
            <Col span={6}>
              <Space size={4}>
                <Button
                  type="primary"
                  icon={<FilterOutlined />}
                  onClick={onFilter}
                />
                <Button
                  type="primary"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={onClear}
                />
              </Space>
            </Col>
          </Row>
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
              rowKey="id"
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
