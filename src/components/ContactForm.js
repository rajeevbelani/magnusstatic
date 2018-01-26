import React from 'react'
import Box from 'grommet/components/Box'
import Form from 'grommet/components/Form'
import Heading from 'grommet/components/Heading'
import FormFields from 'grommet/components/FormFields'
import FormField from 'grommet/components/FormField'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'
import Footer from 'grommet/components/Footer'
import { Link } from 'react-static'
import logoImg from '../mmlogo_small.png'

export default () => (
  <Box>
    <Form>
      {/* <Heading strong align="center">
        RyanCollins.io
      </Heading> */}
      <Heading align="center" tag="h5">
        Contact Form
      </Heading>
      <FormFields>
        <FormField
          help="First and last name"
          label="Name *"
          htmlFor="nameInput"
        >
          <input
            required
            autoFocus
            placeholder="Bill Clinton"
            id="nameInput"
            autoComplete="on"
            name="name"
            type="text"
          />
        </FormField>
        <FormField
          help="How should we get in touch with you?"
          label="Email *"
          htmlFor="emailInput"
        >
          <input
            required
            id="emailInput"
            autoComplete="on"
            name="email"
            placeholder="bill@clinton.com"
            type="email"
          />
        </FormField>
        
      </FormFields>
      <FormField
        label="Message"
        htmlFor="message-input"
      >
        <TextInput
          required
          id="message-input"
        />
      </FormField>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button
          fill
          label="Submit"
          primary
        />
      </Footer>
    </Form>
  </Box>
)

