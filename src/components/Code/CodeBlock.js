// Component that takes in a language tag and content from MDX
// and applies the syntax highlighting, copy button, and language tag

import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { CodeBlockFlag } from "./CodeBlockFlag"
import styled from "styled-components"
import ClientOnly from "./ClientOnly"
const _ = require("lodash")
require("./code.css")

const MainBlock = styled.div`
  border-style: solid;
  border-radius: 8px;
  border-width: 1px;
  margin-bottom: 1rem;
  background: ${props => props.theme.colors.code_background};
  overflow: hidden;
  padding-bottom: 0rem;
  .bar-separate {
    border-top: solid ${props => props.theme.colors.output_line} 0.15rem;
    padding-top: 0.3rem;
    margin-top: 0.6rem; 
  }
  .no-separate {
  }
  .prism-code {
    span {
      font-size: 1rem;
      font-family: ${props => props.theme.fonts.code};
    }
    .token-line {
      min-height: 1rem;
    }
  }
`

const OutputBlock = styled.div`
padding-bottom: 0.2rem;
`

const Code = styled.div`
overflow-x: auto;
`

const Output = styled.div`
  * {
    color: ${props => props.theme.colors.light1} !important;
  }
`

const Block = styled.div`
  padding: 0rem;
  pre {
    overflow: visible;
    padding-bottom: 0rem;
  }
  .prism-code {
    margin: 0;
    padding: 0.3rem 0.8rem;
    padding-top: 0rem;
  }
  .line-darken {
    opacity: 0.5;
  }
  .line-highlight {
  }
  .token-line {
    min-height: 1.65rem;
  }
`

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0.7rem;
  padding-bottom: 0.4rem;
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
  .copy-text {
    font-size: 0.9rem;
  }
  .confirm {
    color: #abe338;
  }
`


// Copy Button
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

const ammendChildren = (arr) => {
  let str = ''
  arr.forEach(line => {
    str += line
    str += '\n'
  })
  return str
}

const copyIcon = (isCopied) => {
  if (isCopied) {
    return(<div>Copied</div>)
  } else {
    return(<div>Copy</div>)
  }
}

// Regex to split the language from line focusing specifiers
// Ex: language-python{2,5-8} => {Language: Python Lines-To-Focus: [2,5,6,7,8]}
const CodeBlock = ({ children, className }) => {
  // Pull the className
  let reg = className.match(/language-([a-z]*)(.*)/)
  const language = reg[1]
  const high = className.match(/high={([0-9-,]*)}/)
  const out = className.match(/out={([0-9]*)}/)

  let result = []
  try {
    result = high[1].split(",")
  } catch (err) {}

  let output = 0
  try {
    output = out[1]
  } catch (err) {
    output = 0
  }

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

  // Remove output from children and setup vars
  let output_class = "no-separate"
  let output_lines = []
  const strSplit = children.trim().split('\n');
  if (output > 0) {
    children = ammendChildren(strSplit.slice(0,-output))
    output_class = "bar-separate"
    output_lines = strSplit.slice(-output)
    output_lines.shift()
  }

  const [isCopied, setIsCopied] = React.useState(false)

  // Going to comment this all soon, basically goes lines by line and item
  // by item and applies colors. CodeBlockFlag is the colored rectangle with
  // language name on the site.
  return (
    <ClientOnly>
      <MainBlock>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={undefined}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => {

          return (
            <Block>
              <Toolbar>
                <CodeBlockFlag lang={language.toLowerCase()}/>
                <CopyButton
                  onClick={() => {
                    copyToClipboard(children)
                    setIsCopied(true)
                    setTimeout(() => setIsCopied(false), 2000)
                  }}>
                    <div className="copy-text">
                      {copyIcon(isCopied)}
                    </div>
                </CopyButton>
              </Toolbar>
              
              <Code>
                <pre className={className} style={{ ...style }}>
                  {tokens.map((line, index) => {
                    let highlighted = ""
                    if (highlights.length !== 0) {
                      highlighted = !highlights.includes(index + 1)
                        ? "line-darken"
                        : "line-highlight"
                    }
                    const lineProps = getLineProps({ line, key: index })
                    return (
                      <div className={highlighted} key={index}>
                        <div key={index} {...lineProps}>
                          {line.map((token, key) => (
                            <span key={key}{...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </pre>

                <pre className={className}>
                  <OutputBlock className={output_class}>
                  {output_lines.map((line, index) => {
                    return (
                        <Output className={"output"} key={index}>
                          <span>{line}</span>
                        </Output>
                    )
                  })}
                  </OutputBlock>
                </pre>
              
              </Code>
            </Block>
          )
        }}
      </Highlight>
    </MainBlock>
  </ClientOnly>
  )
}

export default CodeBlock