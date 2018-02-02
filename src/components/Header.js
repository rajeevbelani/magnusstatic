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

export default () => (
  <Header fixed justify="center" colorIndex="light-1" pad="small">
    <Box size={{ width: { max: 'xxlarge' } }} direction="row"
      responsive={false} align="start"
      flex="grow">
      <Title />
      <Image src={logoImg} size='thumb' />
      <Box pad="small" />
      <Menu label="Menu" inline direction="row" flex="grow" >
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/blog">Patient Stories</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/hospitals">Hospitals</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </Menu>

      <Box flex="grow" align="end">
      
      <Image src='http://www.nabh.co/Images/1.%20Entry%20Level.jpg' size='thumb' />
      </Box>
    </Box>
  </Header>
)

