import React from 'react'
import styled from 'react-emotion'
import { Column, Row, Text, animations, palette } from './styleguide'

const FakeNativeButton = styled('div')`
  border-radius: 100%;
  max-width: 10px;
  width: 100%;
  height: 10px;
  background-color: ${palette.stroke};
  margin-right: 8px;
`

const FakeBrowser = styled(Column)`
  ${animations.fadeInSlow};
  animation-delay: 1500ms;
  opacity: 0;
  border: 1px solid ${palette.stroke};
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  height: 498px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`

const Container = styled(Row)`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  padding: 40px;
`

const Hero = styled(Column)`
  ${animations.fadeInSlow};
  width: 100%;
  height: 100%;
  max-width: 40%;
`

const Two = styled(Text)`
  opacity: 0.1;
  position: absolute;
  left: 0;
  right: 60%;
  top: -40px;
  bottom: 0;
`

const Title = styled(Text)`
  ${animations.fadeInSlow};
  animation-delay: 500ms;
  opacity: 0;
  margin-bottom: 20px;
`

const About = styled(Text)`
  ${animations.fadeInSlow};
  animation-delay: 1000ms;
  opacity: 0;
  margin-bottom: 20px;
`

const BrowserBar = styled(Row)`
  height: 20px;
  border-bottom: 1px solid ${palette.stroke};
  padding: 4px 8px;
`

export default ({ className, style, onAuthorize, SignInButton }) => {
  const SignIn = styled(SignInButton)`
    ${animations.fadeInSlow};
    animation-delay: 1500ms;
    opacity: 0;
  `

  return (
    <Container justify="space-between">
      <Hero grow>
        <Two center gray size={'max'}>
          2
        </Two>
        <Title title light size={4}>
          vault.crucible.gg
        </Title>
        <About gray size={2}>
          Fast, Simple, Gear Management for Destiny 2
        </About>
        <SignIn label="Sign In" onClick={onAuthorize} />
      </Hero>
      <FakeBrowser justify="start" align="stretch" grow>
        <BrowserBar justify="start">
          <FakeNativeButton />
          <FakeNativeButton />
          <FakeNativeButton />
        </BrowserBar>
        <div
          style={{
            width: '100%',
            position: 'relative',
            paddingTop: '56.5%',
          }}>
          <iframe
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: '-2px',
              right: '-2px',
              bottom: 0,
            }}
            title="video"
            width="102%"
            height="102%"
            src="https://www.youtube.com/embed/075ff5uE1tA?rel=0&amp;controls=0&amp;showinfo=0"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </FakeBrowser>
    </Container>
  )
}
