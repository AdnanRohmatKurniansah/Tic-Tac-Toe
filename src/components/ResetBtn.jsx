import React from "react"

const ResetBtn = ({resetBoard}) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
    )
}
export default ResetBtn