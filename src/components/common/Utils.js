export const copyToClipboard = str => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str)
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str);
  }
};