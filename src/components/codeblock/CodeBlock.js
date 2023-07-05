import rangeParser from "parse-numeric-range";
import Highlight, { defaultProps } from "prism-react-renderer";
import React from "react";
import { Check, Copy } from 'react-feather';
import styled from "styled-components";
import ClientOnly from "./ClientOnly";
import LanguageFlag from "./LanguageFlag";
import "./theme.css";


const copyToClipboard = str => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
  }
};

const CopyIcon = (isCopied) => {
  return (isCopied ? <Check className="check" /> : <Copy />)
}

const Container = styled.div(({ theme }) => `
  // Colors
  background-color: #1d1f21;

  // Border
  border-radius: ${theme.radii.content};

  // Spacing
  padding: 0.75rem;
  margin: 1em 0em;

  // Child Styles
  .prism-code {
    margin: 0rem;
  }
`)

const ContentBox = styled.div(({ theme }) => `
`)

const Toolbar = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
`)

const CopyButton = styled.div(({ theme }) => `
  background: transparent;
  padding: 0.25rem;
  &:hover {
    cursor: pointer;
  }

  .check {
    color: #00ff00;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`)

const Code = styled.div(({ theme }) => `

  // Font Styling
  font-family: ${theme.fonts.code} !important;

  // Line Focus Style
  .highlight {
    opacity: 1.0;
  } 
  .darken {
    opacity: 0.4;
  }

  // Separator Styles
  .bar-separate {
    border-top: solid gray 0.15rem;
    margin: 0.5rem 0rem;
  }
`)

const OutputSep = styled.div(({ theme }) => `
`)

const OutputLines = styled.div(({ theme }) => `
`)

const CodeBlock = ({ children: { props } }) => {
  // Get language and code
  const language = (props.className || "").replace(/language-/, "");
  const rawCode = props.children.trim();

  // Process File Argument
  // Not currently using this
  // let file = props.file;

  // Process Outputs
  const outputCount = parseInt(props.output) || 0;
  let outputState = (outputCount > 0) ? "bar-separate" : "no-separate";

  // Process Code
  // i.e. remove lines of code and trim
  const codeLines = rawCode.split("\n")
  var { code, output } = { undefined, undefined }
  if (outputCount > 0) {
    code = codeLines.slice(0, -outputCount).join("\n").trim()
    output = codeLines.slice(-outputCount)
  } else {
    code = rawCode
    output = []
  }

  // Process Highlights
  const highlights = rangeParser(props.highlight || "");

  // Copy Button Elements
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <ClientOnly>
      <Container>
        <Highlight {...defaultProps} language={language} code={code} theme={undefined}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <ContentBox>
              <pre className={className} style={style}>
                <Toolbar>
                  <LanguageFlag lang={language.toLowerCase()} />
                  <CopyButton
                    onClick={() => {
                      copyToClipboard(code)
                      setIsCopied(true)
                      setTimeout(() => setIsCopied(false), 1500)
                    }}>
                    {CopyIcon(isCopied)}
                  </CopyButton>
                </Toolbar >
              </pre>
              <Code>
                <pre className={className} style={style}>
                  {tokens.map((line, i) => {
                    let lineProps = getLineProps({ line, key: i })
                    if (highlights.length > 0) {
                      let lineClass = highlights.includes(i + 1) ? "highlight" : "darken"
                      lineProps["className"] = [lineProps["className"], lineClass].join(" ")
                    }
                    return (
                      <div {...lineProps}>
                        {line.map((token, key) => (<span {...getTokenProps({ token, key })} />))}
                      </div>
                    )
                  })}
                </pre>
                <OutputSep className={outputState} />
                <OutputLines>
                  <pre className={className} style={style}>
                    {output.map((line, i) => (
                      <div>
                        <span style={{ display: "inline-block" }}>{line}</span>
                      </ div>
                    ))}
                  </pre>
                </OutputLines>
              </Code>
            </ContentBox>
          )}
        </Highlight>
      </Container >
    </ClientOnly >
  )
}
export default CodeBlock