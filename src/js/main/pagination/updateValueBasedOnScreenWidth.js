export function updateValueBasedOnScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1280) {
    return (cardPerPage = 9);
  } else {
    return (cardPerPage = 8);
  }
}
