import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PageTemplateDetails from '../components/PageTemplateDetails';

import banner from '../assets/images/banner.jpeg';

class PageTemplate extends React.Component {
  render() {
    const { title, subtitle, url } = this.props.data.site.siteMetadata;
    const page = this.props.data.markdownRemark;
    const { title: pageTitle, description: pageDescription } = page.frontmatter;
    const description = pageDescription !== null ? pageDescription : subtitle;

    console.log(page);

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@zeevosec" />
            <meta name="twitter:creator" content="@zeevosec" />
            <meta name="twitter:title" content={pageTitle} />

            <meta name="og:description" content={description} />
            <meta name="og:image" content={url + banner} />
            <meta name="og:title" content={pageTitle} />
            <meta name="og:url" content={`${url}/${pageTitle.toLowerCase()}`} />
            <meta name="og:type" content="website" />
          </Helmet>
          <PageTemplateDetails {...this.props} />
        </div>
      </Layout>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        url
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
