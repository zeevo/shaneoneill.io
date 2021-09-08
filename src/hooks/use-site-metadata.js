import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                linkedin
                github
                twitter
                instagram
                email
                rss
                codepen
                website
                discord
              }
            }
            url
            title
            subtitle
            copyright
            projects {
              label
              href
              description
            }
            blog {
              label
              href
            }
          }
        }
      }
    `,
  );

  return site.siteMetadata;
};

export default useSiteMetadata;
