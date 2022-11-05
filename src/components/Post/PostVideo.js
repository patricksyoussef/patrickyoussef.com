import React from "react"
import styled from "styled-components"
import { Player } from 'video-react';

const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;
  max-width: 600px !important;

  * {
  font-family: ${props => props.theme.fonts.main};
  }

  video {
    width: 100%;
  }
`

const PostVideo = ({ video, _autoplay=false }) => {
  return (
    
    <Container>
        <link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css"/>
        <Player controls playsInline muted autoPlay={_autoplay}>
            <source src={video} type="video/mp4" />
        </Player>
    </Container>
)
}
export default PostVideo;