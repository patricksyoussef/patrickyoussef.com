// src/components/CodeBlock.jsx
import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import styled from "styled-components"

const Toolbar = styled.div`
  height: 20px;
  background-color: white;
`

export default ({ children, className }) => {
  // Pull the className
  const language = className.replace(/language-/, "") || ""

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop()
        const nametag = language.toUpperCase()
        console.log(language)
        return (
          <div>
            <pre className={className} style={{ ...style }}>
              <div>{nametag}</div>
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
