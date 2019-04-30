import React from 'react'
import styled from "@emotion/styled"
import tw from "tailwind.macro"


const Container = styled.div`
  ${tw`py-3`};
`
const Text = styled.p`
  ${tw`bg-black text-white`};
`

const HomePage = () => (
  <Container>
    <Text>I am Text component made with Tailwind CSS + EmotionJS</Text>
  </Container>
)

export default HomePage