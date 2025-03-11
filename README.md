# Custom React-like Renderer

## Overview
This project demonstrates a simple, custom implementation of rendering a React-like object structure into a DOM element. Instead of using React, it manually creates and appends an element using vanilla JavaScript.

## Features
- Defines a `reactElement` object that mimics JSX elements.
- Implements a `createElement` function to generate a DOM element from the `reactElement` object.
- Implements a `customRenderer` function that appends the created element to a specified container in the DOM.

## Project Structure
```
├── index.html  # Contains the root div and script reference
├── index.js    # Implements the custom renderer
└── README.md   # Project documentation
```

## How It Works
1. The `reactElement` object defines an anchor (`<a>`) element with various properties (e.g., `href`, `target`, `rel`, and `innerText`).
2. The `createElement` function dynamically creates the DOM element and assigns its attributes.
3. The `customRenderer` function finds the specified container (`root`) and appends the generated element.
4. Running `index.html` in a browser will display a clickable link to Google.

## Usage
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Open `index.html` in a browser.
3. The link will be dynamically created and added to the page.

## Example Output
Upon opening `index.html`, you will see a clickable link:
```
Click Here to visit Google
```
Clicking the link will open Google in a new tab.

## Customization
You can modify the `reactElement` object in `index.js` to create different types of elements:
```js
const reactElement = {
    type: 'button',
    props: {
        innerText: 'Click Me',
        onclick: "alert('Button Clicked!')"
    }
};
```
This will render a button that shows an alert when clicked.

## License
This project is open-source and available under the MIT License.

