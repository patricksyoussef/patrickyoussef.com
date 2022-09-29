// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  justify-content: center;

  video {
    width: -webkit-fill-available;
  }
`

const PostVideo = ({ video }) => (
  <Container className={'post-video'}>
    <video controls onContextMenu={e => e.preventDefault()}>
      <source src={video} type="video/mp4" />
      <track kind="captions" srcLang="en" src="No Sound"/>
    </video>
  </Container>
)
export default PostVideo;