import { createGlobalStyle } from "styled-components";

// CSS reset

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

// Global styles

body {
  background-color: #1b1b1b;
  font-family: 'Inter', sans-serif;
}

button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background-color: transparent;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background-color: #23d997;
    color: white;
  }
}

h2 {
  font-weight: lighter;
  font-size: 4rem;
}

h3 {
  color: white;
}

h4 {
  font-weight: bold;
  font-size: 2rem;
}

p {
  padding: 3rem 0;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}

span {
  font-weight: bold;
  color: #23d997;
}

a {
  font-size: 1.1rem;
}

`;

export default GlobalStyle;
