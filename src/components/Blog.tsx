import React, { useEffect, useState } from "react";
import { makeGet } from "./utils";

const DOMAIN = "https://jsonplaceholder.typicode.com";

type Post = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

type Comment = {
  id: number;
  name: string;
  body: number;
  email: number;
  postId: string;
};

const handlePostClick = async (
  postId: number,
  setComments: (comments: Array<Comment>) => void
) => {
  const comments = await makeGet(DOMAIN)(`/comments?postId=${postId}`);
  setComments(comments);
};

const Blog = () => {
  const [posts, setPosts] = useState<Array<Post>>();
  const [comments, setComments] = useState<Array<Comment> | undefined>();
  const [postSelectedId, setPostSelectedId] = useState<number | undefined>();

  useEffect(() => {
    const makeGet = (domain: string) => async (path: string) => {
      const posts = await fetch(`${domain}${path}`).then((response) =>
        response.json()
      );
      setPosts(posts);
    };

    makeGet(DOMAIN)("/posts");
  }, []);

  useEffect(() => {
    const makeGet = (domain: string) => async (path: string) => {
      const comments = await fetch(`${domain}${path}`).then((response) =>
        response.json()
      );
      setComments(comments);
    };

    makeGet(DOMAIN)(`/comments?postId=${postSelectedId}`);
  }, [postSelectedId]);

  return (
    <div className="grid w-full">
      {posts?.map((p) => (
        <>
          <div
            onClick={() => {
              setPostSelectedId(p.id);
              handlePostClick(p.id, setComments);
            }}
          >
            <div>{p.title}</div>
            <div>{p.body}</div>
          </div>
          {p.id === postSelectedId && (
            <>
              <div>Comments</div>
              {comments?.map((c) => (
                <div className="grid gap-1">
                  <div>{c.name}</div>
                  <div>{c.email}</div>
                  <div>{c.body}</div>
                </div>
              ))}
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default Blog;
