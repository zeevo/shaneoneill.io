import React from 'react';

const PagePreview = (props) => {
  const { body, title } = props;

  return (
    <div className="page">
      <h1 className="page__title">{title}</h1>
      <div className="page__body">{body}</div>
    </div>
  );
};

export default PagePreview;
