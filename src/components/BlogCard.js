import React, { Component } from 'react'

import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'
import Anchor from 'grommet/components/Anchor'
import Image from 'grommet/components/Image'
import { Link } from 'react-static'
import { getBlogTypeString, getBlogLink, getBlogShortDescription } from '../containers/util'

export default class BlogCard extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  _onClickCard (path, event) {
    // event.preventDefault();
    // window.location.href = path;
  }

  render () {
    const { post, showDescription } = this.props
    let descriptionNode = (<Heading tag="h4" />)
    if (showDescription) { descriptionNode = (<Heading tag="h4"> { getBlogShortDescription(post) } </Heading>) }

    return (
      <Link to={getBlogLink(post)}>
        <Card
          colorIndex="light-1"
          margin="small"
          label={getBlogTypeString(post)}
          separator="bottom"
          // heading={
          //   <Heading tag="h3"> <b>{post.title}</b> </Heading>
          // }
          // onClick={this._onClickCard.bind(this, getBlogLink(this.props.post))}
          //   description={descriptionNode}
          contentPad="medium"
          direction="column"
          //   thumbnail={`${post.image.url}`}
          thumbnail={
            <Image size="medium" src={`${post.image.url}`} />
          }
          link={
            <Link to={getBlogLink(post)}><Anchor href={getBlogLink(post)} label="Read More"
              icon={<LinkNextIcon />} /></Link>
          }
        >
          <Heading tag="h3">
            <b>{post.title}</b>
          </Heading>
          {descriptionNode}
        </Card>
      </Link>)
  }
}
