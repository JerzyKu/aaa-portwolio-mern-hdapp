import React from 'react'
import './style.css'
import age from '../../utilities/age'

export default function TaskCard(props) {
    return (
        <div className='task-card--wrapper'>
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
            <p>State: {props.data.state}</p>
            <p>Age: {age(props.data.createdAt)}</p>
            <button onClick={() => props.handleClose(props.data._id)}> Close </button>
        </div>
    )
}
