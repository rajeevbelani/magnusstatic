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
          wecare@magnusmedi.com <br />
        </Paragraph>
      </Box>
      <Box basis="1/2">
        <Heading>
      UGANDA OFFICE
        </Heading>
        <Paragraph size="large">
        Room 33, 3rd floor, Akamwesi Complex, Plot 112, <br/>
        Old Port Bell Road, P.O. Box 34254,<br/> Kampala, Uganda <br/>
        judith.sheenah@magnusmedi.com <br />
        </Paragraph>
      </Box>
    </Box>
    <ContactForm />
  </Section>
)
