/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import { Link } from 'gatsby';
import { getContactHref } from '../utils/index';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import Footer from '../components/Footer';
import { useSiteMetadata } from '../hooks';

const IndexTemplate = () => {
  const { theme } = useThemeUI();
  const { title: siteTitle, subtitle: siteSubtitle, projects, author, blog } = useSiteMetadata();

  return (
    <Layout title={siteTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <h2 sx={{ marginTop: 0, color: 'text' }}>I build things with computer code.</h2>
        <p>Some things I have made are...</p>
        <ul
          sx={{
            listStyle: 'none',
            paddingLeft: 0,
            flexDirection: 'column',
          }}
        >
          {projects.map((project) => (
            <li>
              <a
                href={project.href}
                sx={{
                  border: `2px solid ${theme.colors.text}`,
                  paddingLeft: '1rem',
                  height: '2.1875rem',
                  lineHeight: '2.1875rem',
                  '@media screen and (max-width: 685px)': {
                    width: '100%',
                  },
                  width: '75%',
                  display: 'inline-block',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  color: 'text',
                  '&:hover': {
                    backgroundColor: 'primary',
                    color: 'muted',
                  },
                  cursor: 'pointer',
                }}
              >
                {project.label}
              </a>
            </li>
          ))}
        </ul>
        <i>
          And other things -- check out them out on{' '}
          <a href={getContactHref('github', author.contacts.github)}>Github</a>.
        </i>
        <h2>
          I run a blog and personal space at{' '}
          <a href={getContactHref('website', author.contacts.website)}>zeevo.io</a>
        </h2>
        <ul
          sx={{
            flexDirection: 'column',
          }}
        >
          {blog.map((post) => (
            <li sx={{}}>
              <a
                href={post.href}
                sx={{
                  height: '2.1875rem',
                  lineHeight: '2.1875rem',
                }}
              >
                {post.label}
              </a>
            </li>
          ))}
        </ul>
        <h2 style={{ fontStyle: 'italic' }}>Ok so how do I interact with you?</h2>
        <ul>
          <li>
            <Link to="contact">Contact me</Link>.
          </li>
          <li>
            Tweet at me{' '}
            <a href={getContactHref('twitter', author.contacts.twitter)}>
              {author.contacts.twitter}
            </a>
            .
          </li>
          <li>
            Follow me on Instagram{' '}
            <a href={getContactHref('instagram', author.contacts.instagram)}>
              {author.contacts.instagram}
            </a>{' '}
            for pictures of food and lizards.
          </li>
          <li>
            I am also around on Discord on{' '}
            <a href="https://discordapp.com">{author.contacts.discord}</a>
          </li>
          {/* <li>Email me for professional inquiries</li> */}
        </ul>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Footer contacts={author.contacts} />
        </div>
      </Page>
    </Layout>
  );
};

export default IndexTemplate;
