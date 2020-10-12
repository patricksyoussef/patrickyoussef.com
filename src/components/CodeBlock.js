// src/components/CodeBlock.jsx
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"

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
  const language = className.replace(/language-/, "") || ""
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
          <div>
            <pre className={className} style={{ ...style }}>
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
              {tokens.map((line, index) => {
                const lineProps = getLineProps({ line, key: index })
                return (
                  <div key={index} {...lineProps}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                )
              })}
            </pre>
          </div>
        )
      }}
    </Highlight>
  )
}
