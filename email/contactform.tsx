import React from 'react'

import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
}

export default function ContactForm({ message, senderEmail }: ContactFormEmailProps) {
  return <Html>
    <Head />
    <Preview>New message from your portfolio Site</Preview>
    <Tailwind>
      <Body className="bg-gray-200 text-black">
        <Container>
          <Section className="bg-white  borderBlack my-11 px-11 rounded-md">
            <Heading className='leading-tight'>You have received the following message from the contact form</Heading>
            <Text>{message}</Text>
            <Hr />
            <Text>Receipient of Email: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
    </Html>
}