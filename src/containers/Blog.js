
import React from 'react'
import { getRouteProps, Link } from 'react-static'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Anchor from 'grommet/components/Anchor'
import Heading from 'grommet/components/Heading';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
// import Header from '../components/Header'
//

export default getRouteProps(({ posts }) => (
  <Box
    className="columns-container"
    colorIndex="light-2"
    pad={{ horizontal: 'large' }}
    full="horizontal"
  >
    <Columns
      size="medium"
      justify="center"
      maxCount={3}
      responsive
    >
      {posts.map(post => (
        <Card
          colorIndex="light-1"
          margin="small"
          contentPad="medium"
          
          thumbnail={`${post.image.url}`}
          direction="column"

          link={
            <Link to={`/blog/post/${post.slug}/`}><Anchor href={`/blog/post/${post.slug}/`} label="Learn More"
              icon={<LinkNextIcon />} /></Link>
              
          }>
          <Heading tag="h3">
            <b>{post.title}</b>
          </Heading>
        </Card>
      ))}
    </Columns>
  </Box>
))
