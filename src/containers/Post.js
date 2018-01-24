import React from 'react'
import { getRouteProps, Link } from 'react-static'
import { Markdown } from 'grommet/components/Markdown'
//

export default getRouteProps(({ post }) => (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    <p dangerouslySetInnerHTML={{ __html: post.content.brief.html }} />
  </div>
))
