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
// import { Timeline } from 'antd'
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
import heroimage from './delhiagrapackage.jpeg'

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

        <Hero align="center" backgroundColorIndex="dark" backgroundImage={heroimage} size="small">
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
              <Heading>Health-eisure</Heading>
              <Heading strong tag="h4">In today’s Fast-paced life, we are always on the go and rarely get time to focus on our health and spare quality time with family.
              Regular health Checkups are extremely important as they will help you to detect diseases before they become life threatening. Thus
              we have carefully designed 7 day comprehensive health check up packages at NABH accredited hospitals in India coupled with leisure
              tour to Agra and Jaipur. With this package you can travel to India with your family for a full body check up and also spend some
              quality time visiting famous tourist destinations. So why wait, book your health-eisure package today. Book Now </Heading>
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


                <Accordion openMulti active={0}>
                  <AccordionPanel heading="Key Benefits">
                    <Paragraph size="medium" margin="small">
                      <ul>
                        <li>Quality: Check-up to be done only at NABH/NABL Accredited Hospital</li>
                        <li>Parameters: Over 50 Health Parameters Covered under Health Check-up Package</li>
                        <li>Affordability: 20 – 30 % lower than the average market prices.</li>
                        <li>Appointments: No more waiting at anywhere like Hospital & Hotel.</li>
                        <li>Opportunity: Visit well known tourist attractions around the capital of India</li>
                        <li>Customization: Can be customized Holiday & Health Medical Check-up Packages</li>
                        <li>Zero Headache: Everything is taken care by us, you have to just pack your bag and enjoy your trip in India. </li>
                      </ul>
                    </Paragraph>
                  </AccordionPanel>
                  <AccordionPanel heading="Tests Included? ">
                    <Paragraph size="medium" margin="small">
                    A major aspect of Comprehensive Health Checkup is the early detection and treatment of any lurking serious conditions. A regular health
check-up not only ensures your well-being, but also catches the onset of preventable diseases, saving you a lot of distress and expense. We
have some major conditions listed below that can commonly be identified by a Comprehensive Health Checkup.

                      <ul>
Vitamin Investigation
                        <li> Thyroid History</li>
                        <li> Investigations</li>
                        <li> Imaging of Key Areas</li>
                        <li> Pulmonary Diagnostics</li>
                        <li> ENT </li>
                        <li> Lipid Profile </li>
                        <li> Diabetic </li>
                        <li> Kidney Functions </li>
                        <li> Evaluation of Cardiac Systems</li>
                        <li> Liver Function Test </li>
                        <li> HIV/HBsAG </li>
                        <li> 2 Physicians Consultation </li>
                        <li> Calcium Score </li>
                        <li> Detailed Blood Profile </li>
                        <li> Detailed Specialty consultation </li>
                        <li> Infection Screening </li>
                        <li> Ophthalmologist </li>
                        <li> Dentistry Opinion </li>
                        <li> Dietician Opinion </li>
                        <li> Cancer Markers </li>
                        <li> Pap Smear (Only for Female) </li>

                      </ul>
                    </Paragraph>
                  </AccordionPanel>
                  <AccordionPanel heading="Itinerary">
                    <Paragraph>
                      <strong>Day 1: Arrival at DELHI:</strong>
                      <ul>
                        <li>Arrival at Delhi International Airport you’ll be assisted by our tour manager.</li>
                        <li>Hotel Check-in and overnight in Delhi Hotel</li>
                      </ul>
                    </Paragraph>

                    <Paragraph>
                      <strong>Day 2: Health Checkup Day</strong>
                      <ul>
                        <li>Early morning around 7 Am, you will be
                        picked up for the hospital.</li>
                        <li>Schedule for whole day comprehensive
                        health checkup.</li>
                        <li>You will be dropped at Hotel in the
                        evening.</li>
                        <li> Stay overnight in Delhi </li>
                      </ul>
                    </Paragraph>

                    <Paragraph>
                      <strong>Day 3: Arrival at DELHI:</strong>
                      <ul>
                        <li>Arrival at Delhi International Airport you’ll be assisted by our tour manager.</li>
                        <li>Hotel Check-in and overnight in Delhi Hotel</li>
                      </ul>
                    </Paragraph>

                    <Paragraph>
                      <strong>Day 4: Arrival at DELHI:</strong>
                      <ul>
                        <li>Arrival at Delhi International Airport you’ll be assisted by our tour manager.</li>
                        <li>Hotel Check-in and overnight in Delhi Hotel</li>
                      </ul>
                    </Paragraph>

                    <Paragraph>
                      <strong>Day 5: Arrival at DELHI:</strong>
                      <ul>
                        <li>Arrival at Delhi International Airport you’ll be assisted by our tour manager.</li>
                        <li>Hotel Check-in and overnight in Delhi Hotel</li>
                      </ul>
                    </Paragraph>
                  </AccordionPanel>
                </Accordion>
              </Box>
              <Box basis="1/3">
                <Box
                  direction="row"
                  justify="between"
                  separator="top"
                >
                  <PackageContactForm />
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

