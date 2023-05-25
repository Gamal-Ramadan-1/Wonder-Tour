import React from 'react'
import './Scale3d.scss'
const Scale3d = (props) => {
    return (
        <div className={"btn text-capitalize get-free-quote " + props.Classes}>
            {props.Text}
        </div>
    )
}

export default Scale3d