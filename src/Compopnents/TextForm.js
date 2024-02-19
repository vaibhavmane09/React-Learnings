import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper Case is Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        // console.log("Lower Case is Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("You clicked on the On Change Function!!!")
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows={8} defaultValue={""} />
                </div>
                <button className="btn btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn btn-secondary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
            </div>
            <div className="container my-2">
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} Words And {text.length} Charactes</p>  
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>  
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
