function customRender(reactElement, container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.taregt)

    // container.appendChild(domElement)


    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])   
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        taregt: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)