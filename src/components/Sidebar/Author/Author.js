/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styles from './Author.module.scss';

const Author = ({ author, isIndex }) => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={styles['author']}>
      <Link to="/">
        <Img fixed={file.childImageSharp.fixed} alt={author.name} />
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
        <h6 className={styles['author__subtitle']}>
          {author.bio
            .split('.')
            .filter((ele) => ele)
            .map((ele) => (
              <>
                <span>{ele}.</span>
                <br />
              </>
            ))}
        </h6>
      </div>
    </div>
  );
};

export default Author;
