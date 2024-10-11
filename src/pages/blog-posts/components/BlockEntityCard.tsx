import { Card, Col, Form, Row, Select } from "antd";
import React from "react";

interface BlockEntityCardProps {
  formProps: any; // Replace 'any' with the specific type if available
}

export const BlockEntityCard: React.FC<BlockEntityCardProps> = () => {
  return (
    <Card
      title="Block Entity"
      style={{ marginBottom: 24, display: "flex", flexDirection: "column" }}
    >
      <Row gutter={20}>
        <Col>
          <Form.Item
            label={"Post type"}
            name={["Post_type"]}
            initialValue={"Blog"}
            rules={[{ required: true }]}
          >
            <Select
              defaultValue={"Blog"}
              options={[
                { value: "Blog", label: "Blog" },
                { value: "Page", label: "Page" },
              ]}
              style={{ width: 300 }}
            />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            label={"Categories"}
            name={["Categories"]}
            rules={[{ required: true }]}
          >
            <Select
              defaultValue={"Cars & Motors"}
              options={[
                { value: "Cars & Motors", label: "Cars & Motors" },
                { value: "Unsold Product", label: "Unsold Product" },
                { value: "Cancer", label: "Cancer" },
              ]}
              style={{ width: 300 }}
            />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            label={"Status"}
            name={["status"]}
            initialValue={"draft"}
            rules={[{ required: true }]}
          >
            <Select
              defaultValue={"draft"}
              options={[
                { value: "draft", label: "Draft" },
                { value: "published", label: "Published" },
                { value: "rejected", label: "Rejected" },
              ]}
              style={{ width: 300 }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
};
