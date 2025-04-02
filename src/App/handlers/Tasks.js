import { apiUrl, postData, getData } from "../utils/Api";

// Добавляємо задачу
export async function addtask(taskName, setTaskName) {

    // формуємо дані для відправки на сервер
    const data = {
        title: taskName
    }

    // очищуємо введені дані
    setTaskName('')

    // перевіряємо чи введені дані не пусті
    if (taskName.trim() === '') {
        return alert('Введіть назву задачі');
    } else {
        return await postData(apiUrl.tasks, data)
    }
}


// Отримуємо всі задачі
export async function getTasks(setTasks) {
    const apiTasks = await getData(apiUrl.tasks);
    setTasks(apiTasks);
}