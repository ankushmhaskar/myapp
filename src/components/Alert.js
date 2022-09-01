import React from 'react'

function Alert(props) {
    return (
        <>
         {props.alert && <div className="alert alert-primary" role="alert">
                <strong>{props.alert.msg1} {props.alert.msg}</strong>
            </div>}
        </>
    )
}
export default Alert
