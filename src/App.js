import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Card from 'grommet/components/Card'
import Footer from 'grommet/components/Footer'
import Anchor from 'grommet/components/Anchor'
import Menu from 'grommet/components/Menu'
import Title from 'grommet/components/Title'
import Paragraph from 'grommet/components/Paragraph'

import React from 'react'
import { Router, Link } from 'react-static'
import Header from './components/Header'

import Routes from 'react-static-routes'
import '../node_modules/grommet-css'
// import './app.css'

export default () => (
  <App centered={false}>
    <Router>
      <div>
        <Header />
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav> */}
        <div className="content">
          <Routes />
        </div>
        <Footer colorIndex="neutral-4" justify="between">
          {/* <Title>
            Title
          </Title> */}
          <Box direction="row"
            align="center"
            pad={{ between: 'medium' }}>
            <Paragraph margin="none">
              © 2016 Magnus Medi
            </Paragraph>
            <Menu direction="row"
              size="small"
              dropAlign={{ right: 'right' }}>
              <Anchor href="#">
                Support
              </Anchor>
              <Anchor href="#">
                Contact
              </Anchor>
              <Anchor href="#">
                About
              </Anchor>
            </Menu>
          </Box>
        </Footer>
      </div>
    </Router>
  </App>
)
