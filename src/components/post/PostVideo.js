import React from "react"
import styled from "styled-components"

const Container = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  video {
    width: fit-content;
  }
`)

const PostVideo = ({ video, _autoplay = false }) => {
  return (
    <Container className={'post-video'}>
      <video controls playsInline muted preload="metadata" autoPlay={_autoplay}>
        <source src={video + "#t=0.0001"} type="video/mp4" />
        <track kind="captions" srcLang="en" src="No Sound" />
      </video>
    </Container>
  )
}
export default PostVideo;