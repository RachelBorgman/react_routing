import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useParams } from "react-router-dom"

const Pick = (props) => { 
    const {word, fontcolor, backgroundcolor} = useParams();



    return (
        <div>
            <h2 style={{border: '2px solid black', color: fontcolor, backgroundColor: backgroundcolor}}>The word is: {word}</h2>
            <Link to={"/"}>Go Home</Link>
        </div>
    );
}

export default Pick

//DIDN"T WANT TO COPY BUT WANTED FOR FUTURE REFERENCE
// const ParamsComponent = (props)=>{

//     const {word, color, bgCol} = useParams();

//     return(
//         <div>

//             {
//                 //This method returns a boolean based on whether the argument is a number
//                 isNaN(word)?  //If word param isn't a number:
//                 <p style={
//                     //If color param exists, then style this element with the values passed in
//                     color? 
//                     {color: color, backgroundColor: bgCol}
//                     :null
//                 }>
//                     This is a word: {word}
//                 </p>
//                 : //If the word param IS a number:
//                 <p>
//                     This is a number: {word}
//                 </p>
//             }

//         </div>
//     )
// }