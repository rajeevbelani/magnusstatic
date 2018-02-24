import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Title from 'grommet/components/Title'
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook'
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter'
import LinkedInIcon from 'grommet/components/icons/base/SocialLinkedin'
import InstagramIcon from 'grommet/components/icons/base/SocialInstagram'
import SocialShare from 'grommet/components/SocialShare'
import Paragraph from 'grommet/components/Paragraph'
import { Link } from 'react-static'
import { Facebook } from 'grommet-icons'
import Menu from 'grommet/components/Menu'

export default () => (
  <Footer justify='between' colorIndex='neutral-4-t' pad='medium'>
  <Title>
    
  © 2018 Magnus Medi
  </Title>
  <Box direction='row'
    align='center'
    pad={{"between": "medium"}}>
    <Paragraph margin='none'>
      
    </Paragraph>
    <Menu direction='row'
      size='small'
      dropAlign={{"right": "right"}}>
      <Anchor href="http://www.magnusmedi.com/privacypolicy.html">
        Privacy Policy
      </Anchor>
      <Anchor href="http://www.magnusmedi.com/privacypolicy.html">
         Terms of Use
      </Anchor>
    </Menu>
    <Link to='http://bit.ly/2FdbHxw' target="_blank" ><FacebookIcon pad="large"/></Link>
    <Link to='http://bit.ly/2CvIP0H' target="_blank" ><TwitterIcon /></Link>
    <Link to='http://bit.ly/2EF0I36' target="_blank" ><LinkedInIcon /></Link>
  
  </Box>
</Footer>
  // <Footer colorIndex="neutral-4-t" flex="grow" size="medium">
  //   <Box direction="row"
  //     pad={{ between: 'large' }}>
  //     <Paragraph>
  //       © 2018 Magnus Medi
  //     </Paragraph>
  //     <Menu direction="row"
  //       size="medium"
  //       dropAlign={{ right: 'right' }}>
  //       <Anchor href="http://www.magnusmedi.com/privacypolicy.html">
  //        Privacy Policy
  //       </Anchor>
  //       <Anchor href="http://www.magnusmedi.com/privacypolicy.html">
  //         Terms of Use
  //       </Anchor>
  //     </Menu>
  //     <Box direction="row" align="end" responsive={false} pad={{ between: 'small' }} margin="medium">
  //       <Link to='http://bit.ly/2FdbHxw' target="_blank" ><FacebookIcon pad="large"/></Link>
  //       <Link to='http://bit.ly/2CvIP0H' target="_blank" ><TwitterIcon /></Link>
  //       <Link to='http://bit.ly/2EF0I36' target="_blank" ><LinkedInIcon /></Link>
  //       {/* <SocialShare type="twitter" link="http://bit.ly/2CvIP0H" />
  //       <SocialShare type="facebook" link="http://bit.ly/2FdbHxw" />
  //       <SocialShare type="linkedin" link="http://bit.ly/2EF0I36" /> */}
  //     </Box>
  //   </Box>
  // </Footer>
)

