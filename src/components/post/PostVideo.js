import React from "react"
import styled from "styled-components"

const Container = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
`)

const PostVideo = ({ video, aspectRatio = 1.0, _autoplay = false }) => {
  let aspectRatioStr = aspectRatio.toFixed(2)
  return (
    <Container className={'post-video'}>
      <video controls playsInline muted preload="metadata" autoPlay={_autoplay} style={{ width: "100%", aspectRatio: aspectRatioStr }}>
        <source src={video + "#t=0.0001"} type="video/mp4" />
        <track kind="captions" srcLang="en" src="No Sound" />
      </video>
    </Container>
  )
}
export default PostVideo;