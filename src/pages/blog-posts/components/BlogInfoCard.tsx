import { Card, Col, Form, Input, Row, Switch, Button, Select } from "antd";
import ReactQuill from "react-quill";
import React, { useState } from "react";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["blockquote", "code-block"],
    ["clean"],
  ],
};

interface BlogInfoCardProps {
  formProps: any;
}

export const BlogInfoCard: React.FC<BlogInfoCardProps> = () => {
  const [isSlugDisabled, setIsSlugDisabled] = useState(true);
  const [isPixelDisabled, setIsPixelDisabled] = useState(true);

  const handleToggleChange = (checked: boolean) => {
    setIsSlugDisabled(!checked);
  };

  const handlePixel = (checked: boolean) => {
    setIsPixelDisabled(!checked);
  };

  return (
    <Card
      title="Blog Infomation"
      style={{ marginBottom: 24, display: "flex", flexDirection: "column" }}
    >
      <Form.Item
        label={"Meta SEO Title"}
        name={["meta_seo_title"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={"Meta SEO Description"}
        name="description"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label={"Title heading"}
        name={["title"]}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={"Slug For SEO"}
        name="slug"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Row gutter={20} align={"middle"}>
          <Col span={20}>
            <Input disabled={isSlugDisabled} />
          </Col>
          <Col>
            <Switch
              checked={!isSlugDisabled}
              onChange={handleToggleChange}
              checkedChildren="Disable"
              unCheckedChildren="Enable"
              defaultChecked={false}
              style={{ transform: "scale(1.2)" }}
            />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        label={"Facebook pixel"}
        name="facebook_pixel"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Row gutter={20} align={"middle"}>
          <Col span={20}>
            <Input disabled={isPixelDisabled} />
          </Col>
          <Col>
            <Switch
              checked={!isPixelDisabled}
              onChange={handlePixel}
              checkedChildren="Disable"
              unCheckedChildren="Enable"
              defaultChecked={false}
              style={{ transform: "scale(1.2)" }}
            />
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        label={"Content"}
        name="content"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <ReactQuill
          theme="snow"
          modules={modules}
          style={{ height: "400px" }}
        />
      </Form.Item>
    </Card>
  );
};
