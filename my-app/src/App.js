import React, { useState } from "react";
import './style/App.css';
import PostList from "./components/PostList";
import Form from "./components/Form";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, body: "Покормить собаку" }
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <Form create={createPost} />
      <PostList remove={removePost} posts={posts} />
    </div>
  );
}

export default App;
