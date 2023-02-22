import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;

  * {
    font-family: ${props => props.theme.fonts.code};
  }

  video {
    width: fit-content%;
  }
`

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