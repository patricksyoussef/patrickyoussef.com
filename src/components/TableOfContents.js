// Not the best but it'll work for now

import React from "react"
import styled from "styled-components"
import Collapse from "./Utils/Collapse"

const getLinkedText = (title, url) => {
  return(<a href={url}>{title}</a>)
}

const Container = styled.div`
  margin: -1rem 0rem;
`

const TableOfContents = ({toc}) => {

  let length = toc.items.length
  if (length > 4) {
    return(
      <Collapse title={"Table of Contents"}>
        <Container>
          <ul>
            {toc.items.map((item, index) => {
              if (typeof item.items === "undefined") {
                return(<li key={index.toString()}>{getLinkedText(item.title, item.url)}</li>)
              } else {
                return(
                <li key={index.toString()}>
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
        </Container>
      </Collapse>)
  } else {
    return(<div></div>)
  }
}
export default TableOfContents;