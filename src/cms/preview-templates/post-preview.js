// @flow strict
import React from 'react';

const PostPreview = (props) => {
  const { body, title } = props;

  return (
    <div className="post">
      <h1 className="post__title">{title}</h1>
      <div className="post__body">{body}</div>
    </div>
  );
};

export default PostPreview;
