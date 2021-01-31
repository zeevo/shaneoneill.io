/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    <div className={styles['author__block']}>
      {isIndex === true ? (
        <h1 className={styles['author__title']}>
          <Link className={styles['author__title-link']} to="/" sx={{ textDecoration: 'none' }}>
            {author.name}
          </Link>
        </h1>
      ) : (
        <h2 className={styles['author__title']}>
          <Link className={styles['author__title-link']} to="/" sx={{ textDecoration: 'none' }}>
            {author.name}
          </Link>
        </h2>
      )}
      <h6 className={styles['author__subtitle']}>{author.bio}</h6>
    </div>
  </div>
);

export default Author;
