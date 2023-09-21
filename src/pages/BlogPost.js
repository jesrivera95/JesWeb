import {React} from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const BlogPost = () => {
 
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
    </>
  );
};
export default BlogPost;