import React from "react";

// This was painful...
const GIFWrapper = ({ src, alt }) => {
  return (
    <figure className="gatsby-resp-image-figure">
      <span style={{ display: "flex" }} className="gatsby-resp-image-wrapper">
        <span className="gatsby-resp-image-background-image"></span>
        <img style={{ maxWidth: "inherit" }} src={src} alt={alt} className="gatsby-resp-image-image" />
      </span>
      <figcaption>{alt}</figcaption>
    </figure>
  )
}
export default GIFWrapper;