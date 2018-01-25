import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Search from 'grommet/components/Search'
import { Link } from 'react-static'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Actions from 'grommet/components/icons/base/Actions'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'
import UserIcon from 'grommet/components/icons/base/User'
import Image from 'grommet/components/Image'
import logoImg from '../mmlogo_small.png'

export default () => (
  <Header fixed justify="left" colorIndex="neutral-4" pad="small">
    <Box size={{ width: { max: 'xxlarge' } }} direction="row"
      responsive={false} justify="start" align="center"
      flex="grow">
      <img src={logoImg} alt="" />
      {/* <Search inline={true}
          fill={true}
          size='medium'
          placeHolder='Search'
          dropAlign={{"right": "right"}} /> */}
      <Box pad="small" />
      <Menu label="Menu" inline direction="row" flex="grow" >
        <Link to="/"><Anchor>Home</Anchor></Link>
        <Link to="/blog"><Anchor>Blog</Anchor></Link>
        <Link to="/blog"><Anchor>Patient Stories</Anchor></Link>
        <Link to="/doctors"><Anchor>Doctors</Anchor></Link>
        <Link to="/hospitals"><Anchor href="#">Hospitals</Anchor></Link>
        <Link to="/about"><Anchor>About Us</Anchor></Link>
      </Menu>

      <Box flex="grow" align="end">
        {/* <UserIcon /> */}
      </Box>
    </Box>
  </Header>
)

