import React, { Component } from 'react'
import { Link } from 'react-static'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Image from 'grommet/components/Image'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import { getBlogTypeString } from '../containers/util'

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
          <Card key={post._id}
            colorIndex="light-1"
            margin="small"
            label={getBlogTypeString(post)}
            heading={post.title}
            description={post.content.brief.md}

            contentPad="medium"
            direction="column"
            thumbnail={
              <Image size="medium" src={`${post.image.url}`} />
            }
            link={
              <Link to={`/blog/post/${post.slug}/`}><Button onClick="#" label="Read More"
                icon={<LinkNextIcon />} /></Link>

            }
             />
        ))}
      </Columns>
    </Box>)
  }
}
