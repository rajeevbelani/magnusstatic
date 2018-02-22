import React, { Component } from 'react'
import { Link } from 'react-static'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Heading from 'grommet/components/Heading'
import Anchor from 'grommet/components/Anchor'
import Image from 'grommet/components/Image'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import { getBlogTypeString, getBlogLink } from '../containers/util'

export default class NewsFeed extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    return (<Box
      className="columns-container"
      colorIndex="light-2"
      pad={{ horizontal: 'large' }}
    >

      <Columns
        size="medium"
        justify="center"
        maxCount={3}
      >
        {this.props.posts.map(post => (
          <Card
            colorIndex="light-1"
            margin="small"
            label={getBlogTypeString(post)}
            heading={
              <Heading tag="h3"> <b>{post.title}</b> </Heading>
            }
            description={
              <Heading tag="h4"> {post.content.brief.md} </Heading>
            }
            contentPad="medium"
            direction="column"
            thumbnail={`${post.image.url}`}
            // thumbnail={
            //   <Image size="medium" src={`${post.image.url}`} />
            // }
            link={
              <Link to={getBlogLink(post)}><Anchor href={getBlogLink(post)} label="Read More"
                icon={<LinkNextIcon />} /></Link>

            } />
        ))}
      </Columns>
    </Box>)
  }
}
