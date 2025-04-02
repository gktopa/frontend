import React, { useContext } from 'react'
import TaskItem from './TaskItem'
import { TasksContextData } from '../context/TasksContext'



export default function List() {
    const { tasks, setTasks } = useContext(TasksContextData)

    return (
        <>
            <ul id="tasksList">
                {
                    (tasks.length === 0)
                        ? <li className='loading'>Задач не знайдено</li>
                        : tasks.map((task) =>
                            <TaskItem
                                key={task.taskId}
                                task={task}
                                setTasks={setTasks}
                                tasks={tasks}
                            />
                        )
                }
            </ul>
            <div className="alert"></div>
        </>
    )
}
