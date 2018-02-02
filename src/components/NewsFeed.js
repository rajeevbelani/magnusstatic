import React, { Component } from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Columns from 'grommet/components/Columns'
import Heading from 'grommet/components/Heading'
// import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
// import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin'
import LinkNextIcon from 'grommet/components/icons/base/LinkNext'

export default () => (
  <Box className="columns-container" colorIndex="light-2"
    pad={{ horizontal: 'large' }} full="horizontal">
    <Columns size="medium" justify="center"
      maxCount={3} responsive>
      <Card
        colorIndex="light-1"
        margin="small"
        contentPad="medium"
        thumbnail="http://www.aquincumhotel.com/wp-content/uploads/2014/05/wellness-kezelesek.jpg"
        direction="column"
        label="Featured Post"
        link={
          <Anchor href="Http://link.to/dsds" label="Learn More" 
            icon={<LinkNextIcon />} />
        }>
        <Heading tag="h3">
          <b>Wellness Blog</b>
        </Heading>
      </Card>
    </Columns>
  </Box>
)

