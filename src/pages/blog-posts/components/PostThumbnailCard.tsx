import { Card, Form, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React from "react";

interface PostThumbnailCardProps {
  formProps: any;
}

export const PostThumbnailCard: React.FC<PostThumbnailCardProps> = () => {
  return (
    <Card title="Post Thumbnail" style={{ marginBottom: 24 }}>
      <Form layout="vertical">
        <Form.Item
          name="thumbnail"
          valuePropName="fileList"
          getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Card>
  );
};
