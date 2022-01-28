import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPresenter from "presentation";

function App() {
  const presenter = new BlogPresenter()
  const [post, setPost] = useState<{title:string, body:string} | null>(null);
  
  useEffect(()=>{
    presenter.loadBlog("abcdefg").then((post) => {
      setPost(post)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{post?.title}</h1>
        <p>{post?.body}</p>
      </header>
    </div>
  );
}

export default App;
