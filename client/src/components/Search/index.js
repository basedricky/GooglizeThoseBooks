import React from 'react'

export default function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    )
}

export default function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{ backgroundColor: "#2196f3", color: "white", marginBottom: "10px" }}>Search</button>
    )
}