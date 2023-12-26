
import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content, date, imageSrc }) => {
  return (
    <div className="blog-post">
      <img src={imageSrc} alt={title} className="blog-image" />
      <h2>{title}</h2>
      <p className="date">{date}</p>
      <p>{content}</p>
      <button onClick={() => window.history.back()} className='button'>Regresar</button>
    </div>
  );
};

export default BlogPost;
