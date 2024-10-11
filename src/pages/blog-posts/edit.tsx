import { Edit, useForm } from "@refinedev/antd";
import { Form } from "antd";
import { BlogInfoCard } from "./components/BlogInfoCard";
import { BlockEntityCard } from "./components/BlockEntityCard";
import { PostThumbnailCard } from "./components/PostThumbnailCard";

export const BlogPostEdit = () => {
  const { formProps, saveButtonProps, formLoading } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
        <BlogInfoCard formProps={formProps} />
        <BlockEntityCard formProps={formProps} />
        <PostThumbnailCard formProps={formProps} />
      </Form>
    </Edit>
  );
};
