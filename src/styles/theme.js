import colors from "./base_colors";

export const base = {
  shadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px 0px",
  background_darken: "rgba(0, 0, 0, 0.05)",
  fonts: {
    main: "DM Sans Variable",
    code: "Fira Code Variable",
  },
  grid: {
    gap: "1rem",
  },
  radii: {
    content: "0.5rem",
    feature: "1rem",
  },
  transitions: {
    main: "0.2s ease-in-out",
  },
  widths: {
    max: "1400px",
    feature: "1000px",
    content: "900px",
  }
}

let family = "neutral"
let accent = "blue"
export const light_theme = {
  all: colors,
  background: colors[family][50],
  primary: colors[accent][600],
  borders: colors[family][500],
  buttons: {
    border: colors[accent][600],
    border_hover: colors[accent][800],
  },
  cards: {
    background: colors[family][100],
    background_hover: colors[family][200],
  },
  text: {
    dark: colors[family][900],
    normal: colors[family][800],
    light: colors[family][700],
  },
  links: {
    normal: colors[accent][700],
    visited: colors.purple[700],
  }
}