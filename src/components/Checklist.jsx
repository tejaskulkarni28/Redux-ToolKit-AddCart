import React from "react";
import { useSelector } from "react-redux";

const Checklist = ()=>{
    const selector = useSelector((state)=>{return state.addToCartSlice})
    console.log(selector)
    return(
        <div className="checklist-container">
            <div className="checklist-content">
            <h1>Your Cart</h1>
            <ul>
            {
                selector.map((i)=>{
                    return (
                        <li>{i.name}</li>
                    )
                })
            }
            </ul>
            </div>
        </div>
    )
}

export default Checklist;