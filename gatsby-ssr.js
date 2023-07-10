import '@fontsource-variable/fira-code';
import * as React from "react";
import 'sanitize.css';
import 'sanitize.css/forms.css';

export { default as wrapPageElement } from "./src/gatsby_apis/wrapPageElement";
export { default as wrapRootElement } from "./src/gatsby_apis/wrapRootElement";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/DMSansVar.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="mainFont"
    />,
  ])
}