import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/posts.json";
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {

  const fetchBlogs = async () => {
    try {
      let res = await fetch(process.env.REACT_APP_LOCAL_BE_URL + "/blogposts")
      let data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <Row>
      {posts?.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
