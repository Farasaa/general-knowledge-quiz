import React from "react"


export default function ButtonComponent({ onClick }) {
    return (
        <button  className="submit-btn" onClick={onClick}>Check Answers</button>
    
    )
}