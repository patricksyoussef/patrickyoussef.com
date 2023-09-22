import 'sanitize.css';
import 'sanitize.css/typography.css';

export { default as wrapPageElement } from "./src/gatsby_apis/wrapPageElement";
export { default as wrapRootElement } from "./src/gatsby_apis/wrapRootElement";

export const onInitialClientRender = () => {
  // Removing Loading Animation
  const loadTimer = 0
  const animTimer = loadTimer + 200
  setTimeout(function () {
    document.getElementById("___loader").style.opacity = "0"
  }, loadTimer)
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, animTimer)
}

export const onRouteUpdate = ({ location }) => {
  if (location && location.hash) {
    window.onload = () => {
      let target_pos = document.querySelector(`${location.hash}`).offsetTop
      window.scrollTo({ "top": target_pos })
    }
  }
}