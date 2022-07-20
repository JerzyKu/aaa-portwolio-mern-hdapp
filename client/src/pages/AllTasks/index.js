import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TaskCard from '../../components/TaskCard'

export default function AllTasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getTasks()
    }, [])

    function getTasks(){
        Axios.get('http://localhost:3030/ticket').then((response) => {
            setTasks(response.data)
        })
    }

    function handleClose(id) {
        Axios.patch(`http://localhost:3030/ticket/${id}`, {state: 'Close'}).then((response) => {
            getTasks()
        })
    }

    return (
        <>
            <div>AllTasks</div>
            {tasks.map(ele => {
                return (
                    <TaskCard
                        data={ele}
                        handleClose={handleClose}
                        key={ele._id}
                    />)
            })}
        </>
    )
}
