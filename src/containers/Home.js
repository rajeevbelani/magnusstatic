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
import Section from 'grommet/components/Section'
import Paragraph from 'grommet/components/Paragraph'
import Tiles from 'grommet/components/Tiles'
import Label from 'grommet/components/Label'
import Quote from 'grommet/components/Quote'
import { Link } from 'react-static'
import logoImg from '../logo.png'
import homeBanner1 from '../home_banner_1.jpg'
import homePatientStory from '../home_patient_stories_banner.jpg'


export default getSiteProps(() => (
  <Box>
    <Hero size="small" backgroundImage={`${homeBanner1}`} colorIndex="light-1">
      <Card
        heading={
          <Heading strong>
            Your Health Deserves More
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
    <Section>
      <WorldMap colorIndex="accent-1"
        zoom={false} />
    </Section>

    <Hero size="large" backgroundImage="http://antithesisadvertising.com/wp-content/uploads/2015/01/urmcstories-hidden-1-cover.jpg"
      justify="start"
      backgroundColorIndex="dark">
      <Quote>
        <Card
          heading={
            <Heading strong>
                  Over 600 stories of satisfied patients
            </Heading>
          }
          size="large"
          link={
            <Link to="/blog"><Anchor primary label="Read More" /></Link>
          } />
      </Quote>
    </Hero>
    <Tiles fill>
      <Box pad="large" align="center" textAlign="center">
        {/* <Quote> */}
        <Paragraph size="large" width="small" strong="true">
          <b><i>We are lucky to have reached out to the right doctor and hospital. The infrastructure and medical facility of Kokilaben Dhirubhai Ambani Hospital is praiseworthy. </i></b>
        </Paragraph>
        <Label size="large" width="small" strong="true">
          <b>- Patient Name</b>
        </Label>
        {/* </Quote> */}
      </Box>
      <Box pad="large" align="center" textAlign="center">
        {/* <Quote> */}
        <Paragraph size="large" width="small">
          <b><i>Many people in Africa do not have easy access to a doctor or medical information. Magnus's innovative approach is helping to close this important gap.</i></b>
        </Paragraph>
        <Label size="large" width="small" strong="true">
          <b>- Hospital Name</b>
        </Label>
        {/* </Quote> */}
      </Box>
      <Box pad="large" align="center" textAlign="center">
        {/* <Quote> */}
        <Paragraph size="large" width="small">
          <b><i>It’s streets ahead of anything else that’s out there. It’s almost too good..</i></b>
        </Paragraph>
        <Label size="large" width="small" strong="true">
          <b>- Doctor Name</b>
        </Label>
        {/* </Quote> */}
      </Box>

    </Tiles>

  </Box>
))
