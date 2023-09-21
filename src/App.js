import './App.css';
import { Route, Routes } from "react-router-dom";
import { React, useState } from "react";
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';

function App() {
  const [getBlogContent, setGetBlogContent] = useState([]);
    const getData = (blog) => {
      setGetBlogContent(blog);
    }
    return (
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage data={getData}/>} />
            <Route path="/blog/:id" element={<BlogPost content={getBlogContent}/>} />
          </Routes>
        </div>
    );
  }
export default App;
