import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import SocialShare from 'grommet/components/SocialShare'
import Paragraph from 'grommet/components/Paragraph'
import { Link } from 'react-static'
import Menu from 'grommet/components/Menu'

export default () => (
  <Footer colorIndex="neutral-4-t"  justify="end" size="medium">
    <Box direction="row"
      pad={{ between: 'medium' }}>
      <Paragraph margin="none">
        © 2018 Magnus Medi
      </Paragraph>
      <Menu direction="row"
        size="small"
        dropAlign={{ right: 'right' }}>
        <Anchor href="#">
         Privacy Policy
        </Anchor>
        <Anchor href="#">
          Terms of Use
        </Anchor>
      </Menu>
      <Box direction="row" align="end" responsive={false}>
        <SocialShare type="email" link="http://www.grommet.io/docs/" />
        <SocialShare type="twitter" link="http://www.grommet.io/docs/" />
        <SocialShare type="facebook" link="http://www.grommet.io/docs/" />
        <SocialShare type="linkedin" link="http://www.grommet.io/docs/" />
      </Box>
    </Box>
  </Footer>
)

