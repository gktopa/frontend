import { useState } from "react"
import { apiUrl, deleteData, putData } from "../utils/Api"

export default function TaskItem({ task, setTasks, tasks }) {
    // видаляємо задачу
    async function delTask() {
        const id = task.taskId
        await deleteData(apiUrl.tasks, id)

        const delIndex = tasks.findIndex(item => item.taskId === id)

        if (delIndex !== -1) {
            const updatedTasks = [...tasks.slice(0, delIndex), ...tasks.slice(delIndex + 1)]
            setTasks(updatedTasks)
        }
    }

    // редагуємо задачу

    // стан для спану
    const [isEditing, setIsEditing] = useState(false);

    // стан для тексту в залежності від стану спану
    const [editBtnText, setEditBtnText] = useState('EDIT');

    // стан для редагування тексту
    const [editedText, setEditedText] = useState(task.title);

    async function editTask() {
        setIsEditing(prev => !prev);

        isEditing ? setEditBtnText('EDIT') : setEditBtnText('SAVE');

        if (isEditing) {
            const id = task.taskId

            if (editedText && editedText !== task.title) {
                const data = {
                    title: editedText
                };
                await putData(apiUrl.tasks, data, id)
            }
        }
    }

    // Статус задачі

    // стaн статусу
    const [taskStatus, setTaskStatus] = useState(task.done)

    async function statusChange() {
        const newStatus = !taskStatus

        setTaskStatus(newStatus)

        const data = { status: newStatus };

        await putData(apiUrl.tasksDone, data, task.taskId);

    }

    return (
        <li>
            <button className={taskStatus ? "task-done" : "task-false"}
                onClick={statusChange}></button>
            <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                disabled={!isEditing}
                className={isEditing ? "show" : "hide"} />
            <span
                className={isEditing ? "hide" : "show"}
            >{editedText}</span>
            <div className="delete">
                <button className='btn-edit' onClick={editTask}>{editBtnText}</button>
                <button className='btn-delete' onClick={delTask}>DEL</button>
            </div>
        </li>
    )
}
