import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function AllTasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3030/ticket').then((response) => {
            setTasks(response.data)
        })
    }, [])

    console.log(tasks);

    return (
        <>
            <div>AllTasks</div>
            {tasks.map(element => {
                return (
                    <div>
                        <h3>{element.title}</h3>
                        <p>{element.description}</p>
                    </div>)
            })}
        </>
    )
}
