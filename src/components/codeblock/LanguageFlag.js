import React from "react";
import LabelBox from "./LabelBox";

// Import color mapping for CodeFlag
let json = require('./CodeColors.json')

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
    name: name,
    background: color
  }
}

const LanguageFlag = ({ lang }) => {
  // Get the color and language string
  const result = GetCodeProps(lang)
  const color = hexToRgb(result['background'])
  const backString = `rgba(${color.r}, ${color.g}, ${color.b}, 0.65)`

  return (
    <LabelBox backString={backString} text={result["name"]} />
  )
}
export default LanguageFlag