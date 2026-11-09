# Project Specifications

## Stack and file organization

- Use plain **HTML, CSS, and JavaScript** only. Do not use a frontend framework, package manager, or build system.
- Keep markup, styles, and behavior in separate files. Use the existing structure: `css/common.css` for shared styles, `css/index.css` for homepage styles, and `js/script.js` for JavaScript. Add page-specific CSS files under `css/` as the Menu, About, and Contact pages are built; keep shared behavior in `js/script.js` where practical.
- Use jQuery from its CDN for DOM interactions.
- Use Swiper.js from its CDN for carousels/sliders.
- Font Awesome is allowed for the Facebook, Instagram, X, and TikTok footer icons.

## CDN references

Include these CDN assets in the HTML pages that need them, loading the libraries before the project JavaScript:

```html
<!-- Swiper styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css">

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

<!-- Swiper -->
<script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
```

Use Font Awesome Free icons for social links if desired; load its stylesheet through a CDN or kit.

## Design and assets

- Use the supplied images in `Design/` as page references and the supplied files in `images/` as site assets.
- Preserve the coffee shop branding, warm brown/orange palette, typography hierarchy, spacing, and image treatments shown in the mockups.
- Provide responsive layouts for the supplied desktop and mobile designs, including the mobile hamburger navigation.
- Reuse consistent navigation, footer, buttons, and visual styles across all pages.

## Interactions

- The mobile navigation opens and closes accessibly.
- Swiper powers the ingredient carousel and any other designed sliders, with usable controls on touch and desktop.
- Menu category controls show the corresponding items where the design indicates tabs or filters.
- Links and buttons have clear hover/focus states and meaningful destinations or actions.

## Accessibility and maintainability

- Use semantic HTML, descriptive image alt text, keyboard-operable controls, and visible focus styles.
- Keep CSS and JavaScript readable and organized. Avoid inline styles and inline event handlers.
