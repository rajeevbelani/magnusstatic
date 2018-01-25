import React from 'react'
import { getSiteProps } from 'react-static'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Card from 'grommet/components/Card'
import Footer from 'grommet/components/Footer'
import Heading from 'grommet/components/Heading'
import Select from 'grommet/components/Select'
import Anchor from 'grommet/components/Anchor'
import WorldMap from 'grommet/components/WorldMap'
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
        } />
    </Hero>

{/* 
    <WorldMap series={[{
      place: [21, 19],
      label: 'Atlanta',
      colorIndex: 'accent-1',
      id: 'atlanta',
      flag: <Box pad="small" colorIndex="accent-1">Atlanta</Box>,
    }, {
      place: [34.052234, -118.243685],
      label: 'Los Angeles',
      colorIndex: 'accent-2',
      id: 'los-angeles',
      flag: <Box pad="small" colorIndex="accent-2">Los Angeles</Box>
    }, {
      place: [35.689487, 139.691706],
      label: 'Tokyo',
      colorIndex: 'graph-1',
      id: 'tokyo',
      flag: <Box pad="small" colorIndex="graph-1">Tokyo</Box>
    }, {
      place: [51.507351, -0.127758],
      label: 'London',
      colorIndex: 'graph-2',
      id: 'london',
      flag: <Box pad="small" colorIndex="graph-2">London</Box>
    }, {
      place: [-33.86882, 151.209296],
      label: 'Sydney',
      colorIndex: 'graph-3',
      id: 'sydney',
      flag: <Box pad="small" colorIndex="graph-3">Sydney</Box>
    }, {
      place: [-22.906847, -43.172896],
      label: 'Rio De Janeiro',
      colorIndex: 'graph-4',
      id: 'rio-de-janeiro',
      flag: <Box pad="small" colorIndex="graph-4">Rio De Janeiro</Box>
    }]}
      
      colorIndex="accent-1" /> */}

  </Box>
))
