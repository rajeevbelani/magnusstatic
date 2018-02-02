import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Select from 'grommet/components/Select'
import Anchor from 'grommet/components/Anchor'
import WorldMap from 'grommet/components/WorldMap'
import Article from 'grommet/components/Article'
import Paragraph from 'grommet/components/Paragraph'
import Pulse from 'grommet/components/icons/Pulse'
import Tiles from 'grommet/components/Tiles'
import Layer from 'grommet/components/Layer'
import Search from 'grommet/components/Search'
import Button from 'grommet/components/Button'

import Section from 'grommet/components/Section'
import Label from 'grommet/components/Label'
import Quote from 'grommet/components/Quote'
import ContactIcon from 'grommet/components/icons/base/Cloud'
import PlayIcon from 'grommet/components/icons/base/Play'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import Header from 'grommet/components/Header'
import Menu from 'grommet/components/Menu'
import Image from 'grommet/components/Image'
import Title from 'grommet/components/Title'

import logoImg from '../mmlogo_small.png'
import { getSiteProps, Head } from 'react-static'
import NewsFeed from '../components/NewsFeed.js'
import ContactForm from '../components/ContactForm'
import homeBanner1 from '../home_banner_1.jpg'


class Home extends Component {
  constructor () {
    super()
    this._onClose = this._onClose.bind(this)
    this._onSubmitEnuiry = this._onSubmitEnuiry.bind(this)
    // this._onNameChange = this._onNameChange.bind(this)
    // this._onEmailChange = this._onEmailChange.bind(this)
    this.state = {
      name: undefined,
      email: undefined,
      ailment: 'Ailment',
      treatment: 'Treatment',
      message: 'Additional Message',
      sendingEnquiry: false,
      notificationActive: false
    }
  }

  _onSubmitEnuiry (event) {
    this.setState({ sendingEnquiry: true })
  }


  _onClose (event) {
    this.setState({ sendingEnquiry: false })
  }

  render () {
    let enquiryNode
    if (this.state.sendingEnquiry) {
      enquiryNode =
        (<Layer onClose={this._onClose}
          closer
          align="center"
          a11yTitle={'Add Campaign'}>
          <ContactForm />
        </Layer>)
    }
    return (
      <Section pad="none">
        <Head>
          <meta charSet="UTF-8" />
          <title>Magnus Medi</title>
        </Head>
        {/* <Hero size="small" backgroundImage={`${homeBanner1}`} colorIndex="light-1"> */}

        <Hero align="center" backgroundImage={`${homeBanner1}`} size="small" colorIndex="light-1">
          {/* <Box direction="row">
            <Image pad="small" src={logoImg} size='thumb' />
            <Heading> Magnus Medi </Heading>
          </Box> */}

          <Card
            label="Magnus Medi"
            heading={
              <Box direction="row">
                <Heading strong> Your Health Deserves More </Heading>
              </Box>
            }
            description={<Box direction="row">
                Travel to India for any kind of treatment. We are your travel Assitant.
            </Box>}
            // description={<Box colorIndex="light-1">
            //   <Select colorIndex="nuetral-4" placeHolder="None"
            //     options={['Cancer', 'Infertility', 'Bariatic', 'Knee Replacement']}
            //     value={undefined}
            //   /></Box>}
            size="large"
            link={
              <Box margin="medium" direction="row">
                <Button icon={<LinkNext />}accent href="#" label="Learn More" />
                <Title />
                <Button icon={<PlayIcon />} onClick={this._onSubmitEnuiry} primary label="Get Started" />
              </Box>
            } />

        </Hero>

        <NewsFeed />
        <Header justify="center" colorIndex="neutral-1" pad="medium">
          <Box flex="grow" align="center">
            <Heading strong tag="h3">Get a Free Second Opinion on your Existing Case</Heading>
            <Box flex="grow" align="end">
              <Button icon={<PlayIcon />} onClick={this._onSubmitEnuiry} primary label="Enquire Now" />
            </Box>
          </Box>
        </Header>

        <Box size={{ width: { max: 'xxlarge' } }} direction="row"
          responsive={false} justify="start" align="center"
          flex="grow">
          {/* <Anchor icon={<Pulse icon={<ContactIcon />} />}
              label="   Get IN Touch"
              href="#" /> */}
        </Box>
        {/* <Hero size="small" backgroundImage="http://antithesisadvertising.com/wp-content/uploads/2015/01/urmcstories-hidden-1-cover.jpg"
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
            />
          </Quote>
        </Hero> */}
        
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
        <Header justify="center" colorIndex="neutral-1" pad="medium">
          <Box flex="grow" align="center">
            <Heading strong tag="h3">Connect with the Best Doctor in India in Minutes</Heading>
            <Box flex="grow" align="end">
              <Button icon={<PlayIcon />} onClick={this._onSubmitEnuiry} primary label="Connect Now" />
            </Box>
          </Box>
        </Header>
        {/* <Header justify="center" colorIndex="neutral-1" pad="medium">
          <Box flex="grow" align="center">
            <Heading strong tag="h3">Connect with the best hospitals in India</Heading>
            <Box flex="grow" align="end">
              <Button icon={<PlayIcon />} onClick={this._onSubmitEnuiry} primary label="Start Now" />
            </Box>
          </Box>
        </Header> */}
        {enquiryNode}

      </Section>
    )
  }
}


export default () => (
  <Home />
)
