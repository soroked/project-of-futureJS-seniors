export function updateValueBasedOnScreenWidth() {
  const screenWidth = window.innerWidth;
  console.log('111');
  if (screenWidth > 1280) {
    return (cardPerPage = 9);
  } else {
    return (cardPerPage = 8);
  }
}
