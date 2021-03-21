/** @jsx jsx */
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const Contact = () => {
  const { title: siteTitle } = useSiteMetadata();

  const pageDescription =
    'Contact me for company websites, blogs, portfolios, or other website ideas you might have and I will help you bring your vision into reality. Full scope.';

  return (
    <Layout title={siteTitle} description={pageDescription}>
      <Sidebar isIndex />
      <Page>
        <h2 sx={{ marginTop: 0, color: 'text' }}>Contact Me</h2>
        <form
          as="form"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <label htmlFor="name">
            Name
            <input name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" name="email" mb={3} />
          </label>
          <label htmlFor="comment">
            Comment
            <textarea name="comment" rows="6" mb={3} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Page>
    </Layout>
  );
};

export default Contact;
