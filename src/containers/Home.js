import React from 'react'
import { getSiteProps } from 'react-static'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Card from 'grommet/components/Card'
import Footer from 'grommet/components/Footer'
import Heading from 'grommet/components/Heading'
import Select from 'grommet/components/Select';
import Anchor from 'grommet/components/Anchor';
import Header from '../components/Header.js'
import logoImg from '../logo.png'


export default getSiteProps(() => (
  <Box>
    <Hero size="small" backgroundImage="http://www.myinfoangel.com/_images/slideshow/Medical2.jpg" colorIndex="light-1">
      <Card
        heading={
          <Heading strong>
                  Get Most Affordable Medical Care In India
          </Heading>
        }
        description={<Box colorIndex="light-1">
          <Select colorIndex="nuetral-4" placeHolder="None"
            options={['Cancer', 'Infertility', 'Bariatic', 'Knee Replacement']}
            value={undefined}
          /></Box>}
        label=""
        size="large"
        link={
          <Box>
            <Anchor href="#" primary label="Get Started" />
          </Box>
        }  />
    </Hero>
  </Box>
))
