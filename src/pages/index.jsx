import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Feed from '../components/Feed';
import banner from '../assets/images/banner.jpeg';

class Index extends React.Component {
  render() {
    const { title, subtitle, url, author } = this.props.data.site.siteMetadata;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@zeevosec" />
          <meta name="twitter:creator" content="@zeevosec" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={subtitle} />
          <meta name="twitter:image" content={url + banner} />
          <html lang="en" />
        </Helmet>
        <Feed posts={posts} author={author} subtitle={subtitle} />
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        url
        title
        subtitle
        copyright
        profilePic
        menu {
          label
          path
        }
        author {
          name
          twitter
          github
          rss
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          timeToRead
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
