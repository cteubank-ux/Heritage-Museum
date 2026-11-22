THE HERITAGE MUSEUM — MODULE 5 RESPONSIVE NAVIGATION

SITE PURPOSE
The Heritage Museum is a small informational museum website. Its primary navigation helps visitors plan a visit, discover exhibitions/events/collections, and learn how to support the museum.

FILES
- index.html: Home page and the Exhibitions, Events, and Collections destination sections
- visit.html: visitor information and programs
- support.html: ways to support museum preservation and programs
- styles.css: shared mobile-first styles, responsive layout, and interaction states
- navigation.js: progressive enhancement for the narrow-screen disclosure button
- navigation-plan.html: content inventory, breakpoint evidence, test record, peer test, code defense, and AI disclosure

DESIGN AND IMPLEMENTATION NOTES
The design uses a turquoise, cream, and gold palette. The layout starts narrow and uses a content-driven wide-layout candidate at 64rem. The six navigation links are repeated in the same order on all three pages. Exhibitions, Events, and Collections link to sections on index.html; Plan Your Visit and Get Support open their corresponding pages.

The JavaScript is intentionally limited to progressive enhancement, synchronization of aria-expanded and the list's data-state, native button activation, and Escape/focus-return behavior. If JavaScript is unavailable, the native link list remains visible.

IMPORTANT COURSE-PROTOTYPE NOTE
Hours, admission prices, and program details are illustrative sample content, not verified real museum information. The Support page is informational only and does not collect donations or personal information.


### Code Defense — The Heritage Museum Responsive Navigation

I designed the Heritage Museum navigation to be responsive, accessible, and reusable across three pages.

I used semantic HTML elements, including a header, navigation landmark, and an ordinary list of links. I included a skip link so keyboard users can bypass the navigation and go directly to the main content. I also used `aria-current="page"` to identify the visitor's current page.

In CSS, I used Flexbox to organize the header and navigation. The layout starts with a narrow-screen design and changes to a horizontal navigation at 64rem. I chose relative units and flexible sizing so the header can adapt to different screen sizes.

I used JavaScript for progressive enhancement. The menu button is initially hidden so that visitors can still access all navigation links if JavaScript is unavailable. When JavaScript loads, the button becomes available and controls whether the navigation list is open or closed.

I created a `setMenuOpen()` function to keep the menu's visual state and the `aria-expanded` attribute synchronized. The native button supports Enter and Space automatically. I also added Escape-key behavior so visitors can close the menu and return keyboard focus to the button.

I tested the navigation at different viewport widths, including 320 pixels, at 200% zoom, with longer navigation labels, and with JavaScript and CSS disabled. I also tested keyboard navigation, pointer interaction, and the current-page indicator.

These decisions help make the navigation usable, accessible, and consistent across all three museum pages.

### Repository: https://github.com/cteubank-ux/Heritage-Museum-Site.git
### Published:  https://cteubank-ux.github.io/Heritage-Museum-Site/