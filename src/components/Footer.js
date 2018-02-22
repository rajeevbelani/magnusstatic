import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import SocialShare from 'grommet/components/SocialShare'
import Paragraph from 'grommet/components/Paragraph'
import { Link } from 'react-static'
import { Facebook } from 'grommet-icons'
import Menu from 'grommet/components/Menu'

export default () => (
  // <Footer justify="between"
  //   size="medium">
  //   <Box direction="row"
  //     align="center"
  //     pad={{ between: 'medium' }}>
  //     <Paragraph margin="none">
  //     © 2018 Magnus Medi 
  //     </Paragraph>
  //     <Menu direction="row"
  //       size="small"
  //       dropAlign={{ right: 'right' }}>
  //       <Anchor href="#">
  //       Privacy
  //       </Anchor>
  //       <Anchor href="#">
  //       About
  //       </Anchor>
  //     </Menu>
  //   </Box>
  // </Footer>
  <Footer colorIndex="neutral-4-t" justify="end" size="medium">
    <Box direction="row"
      pad={{ between: 'medium' }}>
      <Paragraph margin="none">
        © 2018 Magnus Medi
      </Paragraph>
      <Menu direction="row"
        size="small"
        dropAlign={{ right: 'right' }}>
        <Anchor href="http://www.magnusmedi.com/privacypolicy.html">
         Privacy Policy
        </Anchor>
        <Anchor href="http://www.magnusmedi.com/privacypolicy.html">
          Terms of Use
        </Anchor>
      </Menu>
      <Box direction="row" align="end" responsive={false}>
        
        <SocialShare type="twitter" link="http://bit.ly/2CvIP0H" />
        <SocialShare type="facebook" link="http://bit.ly/2FdbHxw" />
        <SocialShare type="linkedin" link="http://bit.ly/2EF0I36" />
      </Box>
    </Box>
  </Footer>
)

