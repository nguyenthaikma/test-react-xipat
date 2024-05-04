import { Descriptions, Modal } from "antd";
import React from "react";

export default function ModalDetail({ detailPost, setDetailPost }) {
  const onClose = () => setDetailPost(null);
  return (
    <Modal
      width={600}
      onCancel={onClose}
      onOk={onClose}
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
          <Descriptions.Item labelStyle={{ width: 100 }} label="Title" span={3}>
            {detailPost.title}
          </Descriptions.Item>
          <Descriptions.Item labelStyle={{ width: 100 }} label="Body" span={3}>
            {detailPost.body}
          </Descriptions.Item>
        </Descriptions>
      )}
    </Modal>
  );
}
