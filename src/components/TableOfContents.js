// Not the best but it'll work for now

import React from "react"
import styled from "styled-components"
import Collapse from "./Utils/Collapse"

const Container = styled.div`
  border-radius: 15px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.text_gray};
  border-style: solid;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.theme.colors.toc};
`

const getLinkedText = (title, url) => {
  return(<a href={url}>{title}</a>)
}

const TableOfContents = ({toc}) => {

  let length = toc.items.length
  if (length > 4) {
    return(
      <Container>
        <Collapse title={"Table of Contents"}>
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
        </Collapse>
      </Container>)
  } else {
    return(<div></div>)
  }
}
export default TableOfContents;