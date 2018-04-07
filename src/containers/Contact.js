import React from 'react'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import ContactForm from '../components/ContactForm'
import { getRouteProps, Link } from 'react-static'

//

export default () => (
  <Section align="center" colorIndex="light-2">
    <Box direction="row"
      size={{ width: 'xxlarge' }}
      pad={{ horizontal: 'medium', vertical: 'medium' }}>
      <Box basis="1/2">
        <Heading>
      HEAD OFFICE
        </Heading>
        <Paragraph size="large">
          Premises no 27, <br />
          1st floor, Shahaji raje marg, <br />
          Vile parle (East), <br />
          Mumbai-400 057 <br/>
          + 91 22 26845800  / 5900 <br />
          +91 90222 25496 <br />
          wecare@magnusmedi.com <br />
        </Paragraph>
      </Box>
      <Box basis="1/2">
        <Heading>
      UGANDA OFFICE
        </Heading>
        <Paragraph size="large">
      Premises no 27, <br />
      1st floor, Shahaji raje marg, <br />
      Vile parle (East), <br />
      Mumbai-400 057, <br/>
      uganda@magnusmeditourism.com
        </Paragraph>
      </Box>
    </Box>
    <ContactForm />
  </Section>
)
