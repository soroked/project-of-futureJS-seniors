export function updateValueBasedOnScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 1280) {
    let cardPerPage = 9;
    return cardPerPage;
  } else {
    let cardPerPage = 8;
    return cardPerPage;
  }
}
