
import React from 'react'
import { withRouteData, Link, Head } from 'react-static'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Section from 'grommet/components/Section'
import Headline from 'grommet/components/Headline'
import Anchor from 'grommet/components/Anchor'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import ContactForm from '../components/ContactForm.js'

import { getBlogTypeString, getBlogHeading, getBlogShortDescription, getBlogDescription, getBlogImage } from './util'
// import Header from '../components/Header'
//


export default withRouteData(({ patientStories }) => (
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
        Patient Stories
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
        {patientStories.map(post => (
          <Card
            colorIndex="light-1"
            margin="small"
            label={getBlogTypeString(post)}
            heading={getBlogHeading(post)}
            description={getBlogShortDescription(post)}
            contentPad="medium"
            direction="column"
            thumbnail={`${getBlogImage(post)}`}
            link={
              <Link to={`/patientstories/post/${post.slug}/`}><Anchor href={`/patientstories/post/${post.slug}/`} label="Read More"
                icon={<LinkNextIcon />} /></Link>

            } />
        ))}
      </Columns>
    </Box>
  </Box>
))
