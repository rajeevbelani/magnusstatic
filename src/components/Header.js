import React from 'react'
import Anchor from 'grommet/components/Anchor'
import Box from 'grommet/components/Box'
import Header from 'grommet/components/Header'
import Search from 'grommet/components/Search'
import { Link } from 'react-static'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Heading from 'grommet/components/Heading'
import Actions from 'grommet/components/icons/base/Actions'
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline'
import UserIcon from 'grommet/components/icons/base/User'
import Image from 'grommet/components/Image'
import logoImg from '../mmlogo_small.png'
import nabhLogo from '../nabhlogo.png'
import iataLogo from '../iata.png'

export default () => (
  <Header fixed justify="center" colorIndex="light-1" pad="small">
    <Box size={{ width: { max: 'xxlarge' } }} direction="row"
      responsive={false} align="start"
      flex="grow">
      <Title />
      <Link to="/"><Image src={logoImg} size='thumb' /></Link>
      <Box pad="small" />
      <Menu label="Menu" inline direction="row" >
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/patientstories">Patient Stories</Link>
        {/* <Link to="/doctors">Doctors</Link>
        <Link to="/hospitals">Hospitals</Link> */}
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </Menu>
      <Box flex="grow" align="end">
        
      </Box>

      <Box flex="grow" direction="row" align="end">
        <Image src={nabhLogo} size='thumb' />
           
        <Image src={iataLogo} size='thumb' />
      </Box>
      
    </Box>
  </Header>
)

