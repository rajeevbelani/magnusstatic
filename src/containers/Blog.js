
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'
import Title from 'grommet/components/Title'
import Headline from 'grommet/components/Headline'
import Anchor from 'grommet/components/Anchor'
import Heading from 'grommet/components/Heading'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

import ContactForm from '../components/ContactForm.js'

import { getBlogTypeString } from './util'
// import Header from '../components/Header'
//


export default withRouteData(({ posts }) => (
  <Box colorIndex="light-2">
    <Head>
      <meta charSet="UTF-8" />
      <title>Medical Tourism in India, Medical treatment at Affordable Price, Travel with Magnus Medi, </title>
    </Head>
    <Section pad="large"
      justify="center"
      align="center"
      colorIndex="neutral-1-t">
      <Headline margin="none">
      Medical Blogs
      </Headline>
    </Section>
    <Box
      className="columns-container"
      colorIndex="light-2"
      pad={{ horizontal: 'large' }}
      >

      <Columns
        size="medium"
        justify="center"
        maxCount={3}
      >
        {posts.map(post => (
          <Card
            colorIndex="light-1"
            margin="small"
            label={getBlogTypeString(post)}
            heading={post.title}
            description={post.content.brief.md}

            contentPad="medium"
            direction="column"
            thumbnail={`${post.image.url}`}
            link={
              <Link to={`/blog/post/${post.slug}/`}><Anchor href={`/blog/post/${post.slug}/`} label="Read More"
                icon={<LinkNextIcon />} /></Link>

            } />
        ))}
      </Columns>
    </Box>
  </Box>
))
