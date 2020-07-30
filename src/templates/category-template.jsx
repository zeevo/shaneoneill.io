import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

import banner from '../assets/images/banner.jpeg';

class CategoryTemplate extends React.Component {
  render() {
    const { title, url } = this.props.data.site.siteMetadata;
    const { category } = this.props.pageContext;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${category} - ${title}`}</title>
            <meta name="description" content={category} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@zeevosec" />
            <meta name="twitter:creator" content="@zeevosec" />
            <meta name="twitter:title" content={category} />

            <meta name="og:description" content={category} />
            <meta name="og:image" content={url + banner} />
            <meta name="og:title" content={`${category} - ${title}`} />
            <meta name="og:url" content={`${url}/${category.toLowerCase()}`} />
            <meta name="og:type" content="website" />
          </Helmet>
          <Sidebar {...this.props} />
          <CategoryTemplateDetails {...this.props} />
        </div>
      </Layout>
    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
        title
        subtitle
        url
        copyright
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
      filter: { frontmatter: { category: { eq: $category }, layout: { eq: "post" }, draft: { ne: true } } }
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
