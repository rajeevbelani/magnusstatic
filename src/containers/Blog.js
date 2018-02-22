
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Image from 'grommet/components/Image'
import Section from 'grommet/components/Section'
import Title from 'grommet/components/Title'
import Headline from 'grommet/components/Headline'
import Anchor from 'grommet/components/Anchor'
import Heading from 'grommet/components/Heading'

import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

import ContactForm from '../components/ContactForm.js'

import { getBlogTypeString, getBlogLink } from './util'
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
      pad={{ horizontal: 'small' }}
    >
      <Columns
        size="medium"
        justify="center"
        maxCount={3}
        masonry={true}
      >
        {posts.map(post => (
          <Link to={getBlogLink(post)}>
            <Card
              colorIndex="light-1"
              margin="small"
              label={getBlogTypeString(post)}
              heading={
                <Heading tag="h3"> <b>{post.title}</b> </Heading>
              }
              description= {
                <Heading tag="h4"> {post.content.brief.md} </Heading>
              }
              contentPad="medium"
              direction="column"
              thumbnail={`${post.image.url}`}
              // thumbnail={
              //   <Image size="medium" src={`${post.image.url}`} />
              // }
              link={
                <Link to={`/blog/post/${post.slug}/`}><Anchor href={`/blog/post/${post.slug}/`} label="Read More"
                  icon={<LinkNextIcon />} /></Link>

              } />
            </Link>
        ))}
      </Columns>
    </Box>
  </Box>
))
