// Not the best but she'll work for now

import React from "react"
import styled from "styled-components"

const Container = styled.div`
`

const getLinkedText = (title, url) => {
  return(<a href={url}>{title}</a>)
}

const TableOfContents = ({toc}) => {

  let length = toc.items.length
  if (length > 4) {
    return(
      <Container>
        <h2>Table of Contents</h2>
        <ul>
          {toc.items.map((item, index) => {
            if (typeof item.items === "undefined") {
              return(<li key={index.toString()}>{getLinkedText(item.title, item.url)}</li>)
            } else {
              return(
              <li>
                {getLinkedText(item.title, item.url)}
                <ul key={index}>
                  {item.items.map((item, index) => {
                    return(<li key={index.toString()}>{getLinkedText(item.title, item.url)}</li>)
                  })}
                </ul>
              </li>)
            }
          })}
        </ul>
      </Container>)
  } else {
    return(<div></div>)
  }
}
export default TableOfContents;