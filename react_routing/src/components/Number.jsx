import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useParams } from "react-router-dom"

const Number = (props) => { 
    const {number} = useParams();

    return (
        <div>
            <h2 style={{border: '2px solid black'}}>The number is {number}</h2>
            <Link to={"/"}>Go Home</Link>
        </div>
    );
}

export default Number