import React from "react"
import styled from "styled-components"

let json = require('../styles/codecolors.json')

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
  padding: 0.25rem;
  border-radius: 0.25rem;
`

export const CodeBlockFlag = ({ lang }) => {
    const result = GetCodeProps(lang)
    const ColRGB = hexToRgb(result['bg'])
    const backString = `rgba(${ColRGB.r}, ${ColRGB.g}, ${ColRGB.b}, 0.65)`

    return <TextBox style={{backgroundColor: backString}}>{result['new_name']}</TextBox>
}