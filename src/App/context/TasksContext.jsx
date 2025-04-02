import { createContext, useEffect, useState } from "react";
import { getTasks } from "../handlers/Tasks";

export const TasksContextData = createContext();

export default function TasksContext({ children }) {
    const [tasks, setTasks] = useState([]);

    // отримуэмо всі задачі с бд
    useEffect(() => {
        getTasks(setTasks)
    }, [])

    return (
        <TasksContextData.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContextData.Provider>
    )
}
