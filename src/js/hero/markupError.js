const logo = new URL('../../img/hero/hero-error-mobile.png', import.meta.url);
const logoTablet = new URL(
  '../../img/hero/hero-error-tablet.png',
  import.meta.url
);

export const markupError = `<div class="error-img-container"><picture>
  <source media="(min-width: 768px)"
  type="image/webp"
  srcset="${logoTablet}" >

  <source media="(min-width: 768px)"
  type="image/png"
  srcset="${logoTablet}" >

  <source media="(min-width: 320px)"
  type="image/webp"
  srcset="${logo}" >

  <source media="(min-width: 320px)"
  type="image/png"
  srcset="${logo}" >

  <img class="hero-error-img" src="${logo}" alt="cocktails" >
  </picture>
  <p class="hero-error-text hero-dark">Sorry, we <span class="hero-text-accent">we didn’t</span> any cocktail for you</p>
  </div>`;
