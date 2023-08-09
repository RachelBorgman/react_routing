import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useParams } from "react-router-dom"

const Phrase = (props) => { 
    const {word} = useParams();

    return (
        <div>
            <h2 style={{border: '2px solid black'}}>The word is: {word}</h2>
            <Link to={"/"}>Go Home</Link>
        </div>
    );
}

export default Phrase