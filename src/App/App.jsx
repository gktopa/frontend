import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import AddTask from "./pages/AddTask";
import Tasks from "./pages/Tasks";
import TasksContext from "./context/TasksContext";

export default function App() {
    return (
        <TasksContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="tasks" element={<Tasks />} />
                        <Route path="add-task" element={<AddTask />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </TasksContext>
    );
}
