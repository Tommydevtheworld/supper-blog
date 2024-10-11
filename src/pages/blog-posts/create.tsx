import { Create, useForm } from "@refinedev/antd";
import { Form } from "antd";
import "react-quill/dist/quill.snow.css";
import { PostThumbnailCard } from "./components/PostThumbnailCard";
import { BlockEntityCard } from "./components/BlockEntityCard";
import { BlogInfoCard } from "./components/BlogInfoCard";

export const BlogPostCreate = () => {
  const { formProps, saveButtonProps } = useForm({});
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <BlogInfoCard formProps={formProps} />
        <BlockEntityCard formProps={formProps} />
        <PostThumbnailCard formProps={formProps} />
      </Form>
    </Create>
  );
};
