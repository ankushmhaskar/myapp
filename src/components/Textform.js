import React, { useState } from 'react'

export default function Textform(props) {
    // usestate apply
    const [text, setText] = useState("enter the text")

    // button events for upper
    const textUpper = () => {
        console.log("clicked" + text);
        let textupper = text.toUpperCase();
        setText(textupper)
    }
    const textLower = () => {
        console.log("clicked" + text);
        let textlower = text.toLowerCase();
        setText(textlower)
    }
    // capitalize txt 
    // firstely convert the array after use the loop in  array
    const textCapitalize=()=>{
        const word = text.split(/\s+/);
        // loop
        for (let i=0; i<word.length; i++){
            word[i]= word[i][0].toUpperCase() + word[i].substring(1);
        }
        setText(word.join(" "))
    }
    const textReset = () => {
        console.log("clicked" + text);
        let textreset = "";
        setText(textreset)
    }

    const textRemoverextra = ()=>{
        console.log("clicked");
        let textRemove= text.split(/[ ]+/);
        setText(textRemove.join(' '))
    }

    // onchange the text
    const textChange = (event) => {
        console.log("changed");
        setText(event.target.value)
    }
    
    // no of words*
    const text_length = () => {
        const noOfwords = text.split(/\s+/);
        return noOfwords.filter(word => word !== "").length;
    }

    return (
        <>
            <div className='conatiner'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode=== 'dark'? 'grey':'white', color: props.mode === 'dark'? 'white': 'black'}} id="myText-box" value={text} rows="10" onChange={textChange}></textarea>
                </div>
                <button className='btn btn-primary my-2' onClick={textUpper}>Uppercase</button>

                <button className='btn btn-primary my-2 mx-2' onClick={textLower}>Lowercase</button>

                <button className='btn btn-primary my-2 mx-2' onClick={textCapitalize}>Capitalize</button>

                <button className='btn btn-primary my-2 mx-2' onClick={textRemoverextra}>Remove extra spaces</button>

                <button className='btn btn-primary my-2 mx-2' onClick={textReset}>Reset</button>

                <div className='my-2'>
                    <h1>Your text Summary</h1>
                    <p>{text_length()} words and {text.length} character</p>
                    <h1>preview</h1>
                    <p>{text} </p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

