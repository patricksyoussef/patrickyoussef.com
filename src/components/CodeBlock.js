// src/components/CodeBlock.jsx
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"
const _ = require("lodash")
require("../styles/code.css")

const Block = styled.div`
  padding: 1rem;
  padding-bottom: 0.3rem;
  background: ${props => props.theme.colors.code_background};
  border-radius: 8px;

  pre {
    overflow: auto;
    padding-bottom: 0.7rem;
  }
  margin-bottom: 1rem;

  .line-darken {
    opacity: 0.5;
  }

  .line-highlight {
    border-left: solid ${props => props.theme.colors.blue} 0.2rem;
    padding-left: 0.6rem;
  }
`
const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.25rem;
  font-family: ${props => props.theme.fonts.sub};
  div,
  button {
    color: ${props => props.theme.colors.text_light};
    font-size: 0.9rem;
  }
`
const CopyButton = styled.button`
  background: transparent;
  padding: 0.2rem;
  border-style: solid;
  border-width: 0px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`

// Thanks to @d__raptis !
const copyToClipboard = str => {
  const el = document.createElement("textarea")
  el.value = str
  el.setAttribute("readonly", "")
  el.style.position = "absolute"
  el.style.left = "-9999px"
  document.body.appendChild(el)
  el.select()
  document.execCommand("copy")
  document.body.removeChild(el)
}

export default ({ children, className }) => {
  // Pull the className
  const reg = className.match(/language-([a-z]*)(.*)/)
  const language = reg[1]

  let result = []
  try {
    result = reg[2].match(/{(.*)}/)[1].split(",")
  } catch (err) {}

  let highlights = []
  result.forEach((item, i) => {
    if (item.includes("-")) {
      let tmp = item.split("-")
      tmp = _.range(parseInt(tmp[0]), parseInt(tmp[1]) + 1)
      tmp.forEach((item, i) => {
        highlights.push(item)
      })
    } else {
      highlights.push(parseInt(item))
    }
  })

  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop()
        return (
          <Block>
            <Toolbar>
              <div>{language}</div>
              <CopyButton
                onClick={() => {
                  copyToClipboard(children)
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 2000)
                }}
              >
                {isCopied ? "Copied" : "Copy"}
              </CopyButton>
            </Toolbar>
            <pre className={className} style={{ ...style }}>
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })
                let highlighted = ""
                if (highlights.length !== 0) {
                  highlighted = !highlights.includes(index + 1)
                    ? "line-darken"
                    : "line-highlight"
                }
                return (
                  <div className={highlighted}>
                    <div key={index} {...lineProps}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  </div>
                )
              })}
            </pre>
          </Block>
        )
      }}
    </Highlight>
  )
}
