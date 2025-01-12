import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js"


function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
// const ReactElement = {
//     type: 'a',
//     props:{
//         href: 'http://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target ='_blank'>Visit google</a>
)
const anotherUser = "chai aur code"

const ReactElement = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visit google ',
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

    ReactElement 
)
