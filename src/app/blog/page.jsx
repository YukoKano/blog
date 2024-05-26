import { Container } from "@/components/Container";

const { Hero } = require("@/components/Hero");

const Blog = () => {
  return (
    <Container>
      <Hero title="blog" subtitle="recent posts" />
    </Container>
  );
};

export default Blog;
