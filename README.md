# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![Screenshot](./images/screenshot.png)

### Links

- Solution URL: [solution URL](https://www.frontendmentor.io/solutions/ping-single-column-coming-soon-page-EgapDlNyzI)
- Live Site URL: [live site URL](https://andreimaier.github.io/Bing-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

`novalidate` is a great way to prevent default error messages on a form
I did not come up with the regex, but there are so many regex versions for validating emails that I thought this simple one to be enough for this mock project.
In my previus JS (project)[https://www.frontendmentor.io/solutions/interactive-card-details-form-EJAdWnuRsg] I did not use helper functions, so this `errorOn()` is a first!

```html
<form novalidate>...</form>

<input pattern="[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}" />
```

```js
function errorOn() {
  error.style.opacity = "1";
  error.style.transform = "translateY(0)";
  error.style.transition = "transform 300ms ease, opacity 300ms ease";
  email.style.border = "2px solid var(--errorRed)";
}
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Useful resources

- [preventDefault() on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) - This is a pretty complex article, but it helped me understand why it is useful to have this function.
- [transition on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) - This is an amazing article which helped me finally understand transition and transform. I'd recommend it to everyone.

## Author

- Frontend Mentor - [@andreimaier](https://www.frontendmentor.io/profile/andreimaier)

## Acknowledgments

I learned a lot from looking at some of my favorite members ✨ [@vcarames](https://www.frontendmentor.io/profile/vcarames) of the _FEM community_ ✨ **Thank you!** ✨
