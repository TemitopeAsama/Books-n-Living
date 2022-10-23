import axios from "axios";
import markdownToHtml from "../../utils/MarkdownToHTML";

import React from 'react'

const Review = ({post, content}) => {
    console.log(post.data.attributes.slug);
  return (
    <div dangerouslySetInnerHTML={{__html: content}}></div>
  )
}

export default Review;


export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:1337/api/book-review/${params.review}`);
  const post = res.data;
  const content = await markdownToHtml(post.data.attributes.content);
  return {
    props: {
      post,
      content
    }
  }
}

export async function getStaticPaths() {
  const res = await axios.get("http://localhost:1337/api/book-reviews/");
  const posts = res.data;
  const paths = posts.data.map((p) => ({
		params: { review: p.attributes.slug }
	}));
  return { paths, fallback: false }
}