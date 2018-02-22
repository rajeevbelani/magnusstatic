import React, { Component } from 'react'
import universal from 'react-universal-component'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Card from 'grommet/components/Card'
import Heading from 'grommet/components/Heading'
import Tiles from 'grommet/components/Tiles'
import Layer from 'grommet/components/Layer'
import Button from 'grommet/components/Button'
import Section from 'grommet/components/Section'
import Markdown from 'grommet/components/Markdown'
import PlayIcon from 'grommet/components/icons/base/Play'
import LinkNext from 'grommet/components/icons/base/FormNextLink'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import { withRouteData, Head } from 'react-static'
import logoImg from '../mmlogo_small.png'
import NewsFeed from '../components/NewsFeed.js'
import ContactForm from '../components/ContactForm'
import Blog from './Blog'

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
    // const { patientSnippets, posts } = this.props
    const patientSnippets = this.props.homepageData.snippets
    const featuredOnHomepage = this.props.homepageData.featured

    // console.log(`Props :: ${JSON.stringify(this.props)}`)
    // console.log(`featuredOnHomepage :: ${JSON.stringify(featuredOnHomepage)}`)
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

    const PatientSnippetsNode = (patientSnippets || []).map((snippet, index) => (
      <Box key={snippet._id} pad="large" align="center" textAlign="center">
        <Markdown components={{
          h1: { props: { strong: true } },
          h2: { props: { strong: true } },
          p: { props: { size: 'large' } },
          li: { props: { size: 'large' } },
          img: { props: { size: 'small' } }
        }} content={`${snippet.content.brief.md}`} />
      </Box>
    ))

    return (     
      <Section pad="small">
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
            colorIndex="light-2"
            pad="small"
            
            heading={
              <Box direction="row">
                <Heading strong> Your Health Deserves More </Heading>
              </Box>
            }
            description={<Box direction="row">
                Travel to India for any kind of treatment. We are your Health Assistant.
            </Box>}
            // description={<Box colorIndex="light-1">
            //   <Select colorIndex="nuetral-4" placeHolder="None"
            //     options={['Cancer', 'Infertility', 'Bariatic', 'Knee Replacement']}
            //     value={undefined}
            //   /></Box>}
            size="large"
            link={
              <Box margin="medium" direction="row">
                {/* <Button icon={<LinkNext />}accent href="#" label="Learn More" /> */}
                <Title />
                <Button icon={<PlayIcon />} onClick={this._onSubmitEnuiry} primary label="Get Started" />
              </Box>
            } />

        </Hero>

        {/* <NewsFeed /> */}
        <NewsFeed posts={featuredOnHomepage} />
        <Header justify="center" colorIndex="neutral-1" pad="medium">
          <Box align="center">
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
          {PatientSnippetsNode}
        </Tiles>
        <Header justify="center" colorIndex="neutral-1" pad="medium">
          <Box align="center">
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


export default withRouteData(({ homepageData }) => (
  <Home homepageData={homepageData} />
))
