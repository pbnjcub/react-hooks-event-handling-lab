// Code EyesOnMe Component Here
import React from 'react'
// import React, { useState } from 'react'


// In the components/EyesOnMe.js file, create a EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add event handlers that listen for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.

function EyesOnMe(){
    // let [eyes, setEyes] = useState(false)
    function focus(e) {
        e.preventDefault()
        console.log('Good!')
        // setEyes(false)
    }

    function blur(e) {
        e.preventDefault()
        console.log('Hey! Eyes on me!')
        // setEyes(true)
    }

    return (
        <div>
            <form>
                <button onBlur={blur} onFocus={focus}>Eyes on me</button>
            {/* <button onClick={eyes ? focus : blur}>Eyes on me</button> */}
            </form>
        </div>
    )
}

export default EyesOnMe;