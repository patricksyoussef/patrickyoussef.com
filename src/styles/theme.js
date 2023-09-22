import colors from "./base_colors";

export const base = {
  shadow: "rgba(0, 0, 0, 0.2) 0px 2px 8px 2px",
  background_darken: "rgba(0, 0, 0, 0.04)",
  fonts: {
    main: "DM Sans",
    code: "Fira Code",
  },
  grid: {
    gap: "1em",
  },
  radii: {
    content: "0.5rem",
    feature: "0.75rem",
  },
  transitions: {
    main: "0.2s ease-in-out",
  },
  widths: {
    max: "1400px",
    content: "800px",
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
  },
  text: {
    dark: colors[family][900],
    normal: colors[family][800],
    light: colors[family][600],
  },
  links: {
    normal: colors[accent][700],
    visited: colors.purple[700],
  }
}