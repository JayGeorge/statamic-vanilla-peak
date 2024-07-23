# README

This readme file provides some ideas on how to structure your CSS files. Following this structure is not a requirement.
It can be helpful to break up imports by different headings to help your mental model of the CSS structure:

```css
/* GROUP CSS / PEAK
=================================================== */
/* Peak's starter styles here */

/* GROUP CSS / THEME
=================================================== */
@import 'base/variables.css';
@import 'base/elements/elements.css';
@import 'objects/pull-image.css';
@import 'objects/stripes.css';
@import 'objects/noise.css';
/* Heroes */
@import 'components/heroes/hero-two-columns.css';
@import 'components/heroes/hero-two-rows.css';
/* Components */
@import 'components/components.css';
@import 'components/site-header.css';
@import 'components/logomark.css';
@import 'components/buttons.css';
/* Components > Sections */
@import 'components/text-lead.css';
@import 'components/image-lead.css';
@import 'components/decorative-list.css';
@import 'components/text-stacks.css';
@import 'components/diagram.css';
@import 'components/team.css';
@import 'components/site-footer.css';
/* Mini Components */
@import 'components/mini/heading-indent.css';
@import 'components/mini/paragraph-highlight.css';
/* Scope */
@import 'scope/entry-content.css';
/* Utilities */
@import 'utilities/utilities.css';
@import 'utilities/extend-background.css';
@import 'utilities/animation-keyframes.css';
/* -- */
@import 'scratch.css';
```
