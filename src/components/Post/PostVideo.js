import React from "react"
import styled from "styled-components"
// Way messing around with using this player but opted not to
// import { Player } from 'video-react';

const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;
  max-width: 600px !important;

  * {
    font-family: ${props => props.theme.fonts.code};
  }

  video {
    width: 100%;
  }
`

// <Container>
// <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
// <Player controls playsInline muted autoPlay={_autoplay}>
//     <source src={video} type="video/mp4" />
// </Player>
// </Container>

const PostVideo = ({ video, _autoplay=false }) => {
  return (
    
  <Container className={'post-video'}>
    <video controls playsInline muted preload autoPlay={_autoplay}>
      <source src={video} type="video/mp4" />
      <track kind="captions" srcLang="en" src="No Sound"/>
    </video>
  </Container>
)
}
export default PostVideo;