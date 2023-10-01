const logoMobile = new URL(
  '../../img/hero/hero-error-mobile.png',
  import.meta.url
);
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
  srcset="${logoMobile}" >

  <source media="(min-width: 320px)"
  type="image/png"
  srcset="${logoMobile}" >

  <img class="hero-error-img" src="${logoMobile}" alt="cocktails" >
  </picture>
  <p class="hero-error-text hero-dark">Sorry, we <span class="hero-text-accent">didn’t find</span> any cocktail for you</p>
  </div>`;
