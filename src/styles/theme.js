import colors from "./base_colors";

export const base = {
  shadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  fonts: {
    main: "DM Sans",
    code: "Fira Code Variable",
  },
  grid: {
    gap: "10px",
  },
  radii: {
    content: "0.5rem",
  },
  widths: {
    max: "1400px",
    feature: "1100px",
    content: "900px",
  }
}

export const light_theme = {
  all: colors,
  background: colors.neutral[50],
  primary: colors.blue[600],
  buttons: {
    border: colors.blue[600],
    border_hover: colors.blue[800],
  },
  text: {
    dark: colors.slate[900],
    normal: colors.slate[800],
    light: colors.slate[700],
  }
}