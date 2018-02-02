import React from 'react'
import Heading from 'grommet/components/Heading'
import Hero from 'grommet/components/Hero'
import Footer from 'grommet/components/Footer'
import Anchor from 'grommet/components/Anchor'
import Label from 'grommet/components/Label'
import FormField from 'grommet/components/FormField'
import Section from 'grommet/components/Section'
import SocialShare from 'grommet/components/SocialShare'
import Button from 'grommet/components/Button'
import Markdown from 'grommet/components/Markdown'
import Card from 'grommet/components/Card'
import HeadLine from 'grommet/components/Headline'
import Box from 'grommet/components/Box'
import LinkNext from 'grommet/components/icons/base/FormNextLink'

import { getRouteProps, Link } from 'react-static'

import DetailsPage from '../components/DetailsPage.js'


export default getRouteProps(({ post }) => (
  <Box>
    <Section pad="none" align="center" colorIndex="light-2">
      <Box
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'medium', vertical: 'medium' }}
      >
        <HeadLine>{`${post.title}`} </HeadLine>
        <Heading strong tag="h3">{`${post.content.brief.md}`} </Heading>
      </Box>
    </Section>
    <Section pad="none" align="center" colorIndex="light-2">
      <Box
        size={{ width: 'xxlarge' }}
        pad={{ horizontal: 'medium', vertical: 'medium' }}
      >
        <Markdown components={{
          h1: { props: { strong: true } },
          h2: { props: { strong: true } },
          p: { props: { size: 'large' } },
          img: { props: { size: 'small' } }
        }} content={`${post.content.extended.md}`} />
        {/* <Paragraph size="xlarge" margin="small" dangerouslySetInnerHTML={{ __html: post.content.extended.html }} /> */}
      </Box>
    </Section>


    {/* <Footer justify='between'>

        <Box direction='row'
          align='center'
          pad={{"between": "medium"}}>
          <Paragraph margin='none'>
            © 2016 Grommet Labs
          </Paragraph>

        </Box>
      </Footer> */}
    <Footer>
      <Section
        align="center"
        pad="large"
        colorIndex="grey-4"
        full="horizontal"
      >
        <Box
          align="center"
          direction="row"
          size={{ width: 'xxlarge' }}
        >
          {/* <Box basis="1/2" pad={{ horizontal: 'large' }}>
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
          </Box> */}
          <Card
            contentPad="large"
            heading="Connect with us"

            link={<Link to={'/contact'}><Button icon={<LinkNext />} primary href="  " label="Send Enquiry" /></Link>}
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
