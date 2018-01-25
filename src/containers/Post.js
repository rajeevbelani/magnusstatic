import React from 'react'
import Footer from 'grommet/components/Footer'
import FormField from 'grommet/components/FormField'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import Image from 'grommet/components/Image'
import Label from 'grommet/components/Label'
import Paragraph from 'grommet/components/Paragraph'
import Quote from 'grommet/components/Quote'
import Section from 'grommet/components/Section'
import SocialShare from 'grommet/components/SocialShare'
import Markdown from 'grommet/components/Markdown'
import Card from 'grommet/components/Card'
import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button'
import Anchor from 'grommet/components/Anchor'

import { getRouteProps, Link } from 'react-static'

import DetailsPage from '../components/DetailsPage.js'

//

export default getRouteProps(({ post }) => (
  <Box>
    <Hero size="small;" backgroundImage="/img/notfound.jpg" colorIndex="grey-1"
      justify="center">
      <Card
        textAlign="center"
        heading={
          <Heading strong>
            {`${post.title}`}
          </Heading>
        }
        description={<Paragraph size="xlarge" margin="small" dangerouslySetInnerHTML={{ __html: post.content.brief.html }} />}
        size="large" />
    </Hero>
    <Section pad="none" align="center" colorIndex="light-2">
      <Box
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'medium', vertical: 'medium' }}
      >
      <Markdown content={`${post.content.extended.md}`}/>
        {/* <Paragraph size="xlarge" margin="small" dangerouslySetInnerHTML={{ __html: post.content.extended.html }} /> */}
      </Box>
    </Section>
    <Footer>
      <Section
        align="center"
        pad="large"
        colorIndex="neutral-1"
        full="horizontal"
      >
        <Box
          align="center"
          direction="row"
          size={{ width: 'xxlarge' }}
        >
          <Box basis="1/2" pad={{ horizontal: 'large' }}>
            <Label uppercase>Share the article</Label>
            <Box direction="row" responsive={false} pad={{ between: 'medium' }}>
              <FormField>
                <input
                  type="text"
                  value="http://www.magnusmedi.com/link-toblog"
                  readOnly
                />
              </FormField>
              <Button label="COPY" onClick={() => console.log('hello')} />
            </Box>
            <Box direction="row" margin={{ top: 'medium' }} responsive={false}>
              <SocialShare type="email" link="http://www.grommet.io/docs/" />
              <SocialShare type="twitter" link="http://www.grommet.io/docs/" />
              <SocialShare type="facebook" link="http://www.grommet.io/docs/" />
              <SocialShare type="linkedin" link="http://www.grommet.io/docs/" />
            </Box>
          </Box>
          <Card
            contentPad="large"
            heading="Pellentesque porta ut augue ac ultricies."
            label="Next Article"
            link={<Anchor href="http://www.grommet.io/docs/" primary>
            Learn More</Anchor>}
            separator="left"
          />
        </Box>
      </Section>
    </Footer>
  </Box>
  // <div>
  //   <Link to="/blog/">{'<'} Back</Link>
  //   <br />
  //   <DetailsPage />
  //   <h3>{post.title}</h3>
  //   <p dangerouslySetInnerHTML={{ __html: post.content.brief.html }} />
  // </div>
))
