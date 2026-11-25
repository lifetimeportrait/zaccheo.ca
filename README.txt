RINO ZACCHEO — PORTFOLIO WEBSITE
================================

Files
- index.html   Page structure and custom inline RZ brand mark
- styles.css   Visual design, responsive layout, typography and artwork placeholder styling
- script.js    Smooth eased anchor scrolling, reveal transitions, parallax and mobile navigation

Preview
Open index.html in a modern browser. No build step or framework is required.

Important content notes
- The About copy and contact invitation are adapted from the supplied Zaccheo Designs website.
- The reference site's portfolio images were not available in the text extraction, so the portfolio and hero artwork are deliberately abstract design placeholders—not representations of Rino's actual paintings.
- Replace the CSS artwork compositions in index.html/styles.css with approved photographs of Rino's original work before launch.
- The original website's public contact email was not exposed in the page text. The mailto destination currently uses rinozaccheo3@gmail.com as a placeholder; replace it with Rino's real address.
- The contact form currently opens the visitor's email application. For direct website submissions, connect Formspree, Basin, Netlify Forms, or a custom backend.

Brand mark
The RZ monogram is drawn as inline SVG in index.html and can be reused independently. It is a new typographic concept, not an existing supplied logo.

All code is vanilla HTML, CSS and JavaScript. Google Fonts are loaded remotely; system fallbacks are provided.


REVISION NOTES
--------------
- Header RZ mark now matches the footer's typographic RZ mark.
- Portfolio gallery now contains 37 numbered original artwork image URLs, matching the image names visible in the supplied Web Inspector screenshot (01–39, excluding 05 and 19).
- Clicking a thumbnail opens a dark overlay viewer with previous/next controls, close control, image counter, Escape, and left/right arrow keyboard navigation, matching the supplied screen recording.
- Hero, about detail and gallery image sources point to the supplied Zaccheo Designs media directory.
- Important: the runtime environment could not resolve zaccheodesigns.zipfolios.com while this revision was being prepared. The image files could not be downloaded and bundled locally. The page references the original public image URLs directly, so the images require the source host to remain online. The image paths are based on the URL pattern shown in your screenshot.
- If you want all image assets stored locally in this ZIP, run download-assets.py on a computer with internet access. It attempts each image URL and saves the successful responses into assets/.


LATEST UPDATE
-------------
- Replaced the About section supporting image with the user-provided portrait of Rino Zaccheo.
- The photograph is bundled locally at assets/rino-portrait.png.
- The About image area is square so the full portrait composition is visible without the previous wide crop.
- All other website content and behaviour are retained from the preceding hero-expanded version.


ABOUT SECTION LAYOUT UPDATE
---------------------------
- Rebuilt the About section to follow the supplied reference: section kicker across the top, editorial text column on the left, portrait image on the right.
- Moved the RZ mark above the eyebrow and headline.
- Reused the locally bundled assets/rino-portrait.png.
- Responsive layout stacks the text and portrait on smaller screens.
- No other sections or interactions were intentionally changed.

- Follow-up: About headline now uses two fixed lines ('Finding form' / 'in the feeling.') with responsive sizing to prevent wrapping into four lines.

- About portrait lowered by 70px on desktop only, following the supplied annotation. No other page elements intentionally changed.

- Header and footer monograms increased by 25%; no other page elements intentionally changed.

- Removed the RZ monogram from the About section so its eyebrow, heading and biography move upward into the reference position. Header/footer marks and all other page elements are unchanged.

- About section content group moved down 106px on desktop; portrait top aligned with the 'A PRACTICE IN PROCESS' eyebrow. No other page elements intentionally changed.

- About-section portrait moved down 90px; no other page elements intentionally changed.

- Added 150px of bottom padding to the About section only. No other page elements intentionally changed.

- Updated all email addresses in website source files to rinozaccheo3@gmail.com.

- Straightened the hero feature image by removing its rotation. No other page elements intentionally changed.

- Increased hero feature image rotation to 5deg for a slightly stronger angle. No other page elements intentionally changed.
