import React, { Component } from 'react'
import Heading from 'grommet/components/Heading'


import Hero from 'grommet/components/Hero'
import Footer from 'grommet/components/Footer'
import Section from 'grommet/components/Section'
import Button from 'grommet/components/Button'
import Markdown from 'grommet/components/Markdown'
import Title from 'grommet/components/Title'
import Card from 'grommet/components/Card'
import FormField from 'grommet/components/FormField'
import { Timeline } from 'antd'
import SocialShare from 'grommet/components/SocialShare'
import Label from 'grommet/components/Label'
import HeadLine from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import Accordion from 'grommet/components/Accordion'
import AccordionPanel from 'grommet/components/AccordionPanel'

import GridList, { GridListTile, GridListTileBar } from 'material-ui-next/GridList'
import Box from 'grommet/components/Box'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import OtherPackages from '../../components/OtherPackages'
import PackageContactForm from '../../components/PackageContactForm'
import { Link } from 'react-static'


export default class DelhiAgraPackage extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render () {
    return (
      <Section className="homeclass">
        {/* <Hero size="small" backgroundImage={`${homeBanner1}`} colorIndex="light-1"> */}

        <Hero align="center" backgroundColorIndex="dark" backgroundImage="https://images.trvl-media.com/media/content/expus/graphics/launch/home/default_desktop_expedia.jpg" size="small">
          <Box style={{ 'background-color': 'rgba(0, 0, 0, 0.3)', color: '#fff', 'font-size': '16' }}>

            {/* <Heading style={{ color: '#fff' }}> Health-eisure </Heading>
            <Heading style={{ color: '#fff' }}> Complete Medical check up with travel leisure </Heading> */}
          </Box>

        </Hero>
        <Box>
          <Section pad="none" align="center" colorIndex="light-2">
            <Box
              size={{ width: '80%' }}
              align="start"
              pad={{ horizontal: 'medium', vertical: 'medium' }}
              colorIndex="light-2"
            >
              <Heading>Title</Heading>
              <Heading strong tag="h4">Small Description</Heading>
            </Box>
          </Section>
          <Section pad="none" align="center" colorIndex="light-2">

            <Box
              direction="row"
              justify="center"
              size={{ width: '80%' }}
              pad={{ horizontal: 'large', vertical: 'medium', between: 'large' }}
              colorIndex="light-1">
              <Box basis="2/3">
                <Paragraph size="large" margin="small">
                        Sit architecto veritatis neque ex laboriosam, laboriosam?
                        Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                        ipsam hic labore cupiditate illo soluta error molestias corporis
                        quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                        tenetur incidunt consectetur dolore blanditiis.
                </Paragraph>

                <Accordion openMulti>
                  <AccordionPanel heading="Key Benefits">
                    <Paragraph size="large" margin="small">
                      <Timeline>
                        <Timeline.Item>Item 1</Timeline.Item>
                        <Timeline.Item>Item 2</Timeline.Item>
                        <Timeline.Item>Item 3</Timeline.Item>
                        <Timeline.Item>Item 4</Timeline.Item>
                      </Timeline>
                    </Paragraph>
                  </AccordionPanel>
                  <AccordionPanel heading="Second Title">
                    <Paragraph size="large" margin="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                  </AccordionPanel>
                  <AccordionPanel heading="Third Title">
                    <Paragraph size="large" margin="small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Paragraph>
                  </AccordionPanel>
                </Accordion>
                <Paragraph size="large" margin="small">
                        Sit architecto veritatis neque ex laboriosam, laboriosam?
                        Aliquid illum ullam tenetur molestiae veniam velit quam. Facilis
                        ipsam hic labore cupiditate illo soluta error molestias corporis
                        quia, ipsa. Nobis ipsa nam eius esse illum unde. Veritatis
                        tenetur incidunt consectetur dolore blanditiis.
                </Paragraph>
              </Box>
              <Box basis="1/3">
                <Box
                  direction="row"
                  justify="between"
                  separator="top"
                >
                  <PackageContactForm />
                  {/* <Label margin="small" size="small" uppercase>
                    <strong>Share</strong>
                  </Label>
                  <Box
                    align="center"
                    direction="row"
                    responsive={false}
                  >
                    <SocialShare
                      type="email"
                      link="http://dsdsd"
                      colorIndex="grey-4"
                    />
                    <SocialShare
                      type="twitter"
                      link="dfdfdfd"
                      colorIndex="grey-4"
                    />
                    <SocialShare
                      type="facebook"
                      link="dfdfdfd"
                      colorIndex="grey-4"
                    />
                    <SocialShare
                      type="linkedin"
                      link="fdfdfd"
                      colorIndex="grey-4"
                    />
        </Box> */}
                </Box>
              </Box>
            </Box>
            <OtherPackages />
          </Section>
          <Footer />
        </Box>
      </Section>
    )
  }
}

