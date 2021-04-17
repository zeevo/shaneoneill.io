/** @jsx jsx */
import { jsx, Label, Input, Box, Button, Textarea } from 'theme-ui';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import Footer from '../components/Footer';

const IndexTemplate = () => {
  const { title: siteTitle, author } = useSiteMetadata();

  const pageDescription =
    'Contact me for company websites, blogs, portfolios, or other website ideas you might have and I will help you bring your vision into reality. Full scope.';

  return (
    <Layout title={siteTitle} description={pageDescription}>
      <Sidebar isIndex />
      <Page>
        <h2 sx={{ marginTop: 0, color: 'text' }}>Contact Me</h2>
        <p>
          Do you need a{' '}
          <span sx={{ color: 'primary', fontWeight: 'bold' }}>
            Website? Discord Bot? Content Management System? General Scripting?
          </span>{' '}
          I can build it for you.
        </p>
        <p>
          I usually respond within{' '}
          <span sx={{ color: 'primary', fontWeight: 'bold' }}>24 hours.</span>
        </p>
        <Box
          as="form"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          action="#"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Label htmlFor="name">Name</Label>
          <Input name="name" mb={3} placeholder="John Smith" />
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" mb={3} placeholder="your.email@gmail.com" />
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            rows="6"
            mb={3}
            placeholder="I need a website for my company with email notifications and pictures -- Let's build this together for cheap..."
          />
          <Button
            type="submit"
            sx={{
              width: '100%',
              cursor: 'pointer',
              borderColor: 'background',
              color: 'background',
              backgroundColor: 'primary',
              '&:hover': {
                color: 'background',
                backgroundColor: 'secondary',
              },
            }}
          >
            Submit
          </Button>
        </Box>
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
