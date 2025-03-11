
const reactElement = {
    type: 'a',
    props: {
        href:"https://www.google.com",
        target: "_blank",
        rel : 'noopener noreferrer',
        innerText: 'Click Here to visit Google'
    }
}

function createElement(reactElement){
   const element = document.createElement(reactElement.type);

   for(const prop in reactElement.props){
      if(prop === 'innerText'){
         element.innerText = reactElement.props[prop];
      } else {
         element.setAttribute(prop, reactElement.props[prop]);
      }
   }
   return element;
}

function customRenderer(reactElement,containerId){
    const container = document.getElementById(containerId)

    if(container){
        const element = createElement(reactElement);
        container.appendChild(element);
    }
    else {
        console.log("container not found")
    }
}

customRenderer(reactElement,'root');
