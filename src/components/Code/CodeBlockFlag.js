// Takes in the language and spits out a colored box with a the correct
// display name for the language
// Ex: python => {name:"Python", color:"Blue"}

import React from "react"
import styled from "styled-components"

// Import color mapping for CodeFlag
let json = require('./codecolors.json')

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  function GetCodeProps(key) {
    const name = json[key]['name']
    const color = json[key]['color']

    return {
        new_name: name,
        bg: color
    }
  }

const TextBox = styled.div`
  padding: 0.15rem 0.25rem;
  border-radius: 0.25rem;
  .lang-text {
    font-size: 1rem;
  }
`

export const CodeBlockFlag = ({ lang }) => {
    const result = GetCodeProps(lang)
    const ColRGB = hexToRgb(result['bg'])
    const backString = `rgba(${ColRGB.r}, ${ColRGB.g}, ${ColRGB.b}, 0.65)`

    return <TextBox style={{backgroundColor: backString}}>
        <div className="lang-text">
          {result['new_name']}
        </div>
      </TextBox>
}