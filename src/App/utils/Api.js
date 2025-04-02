// Посилання на апі
const baseUrlApi = 'https://backend-zeta-topaz-88.vercel.app';
export const apiUrl = {
    tasks: baseUrlApi + '/tasks',
    tasksDone: baseUrlApi + '/tasks/done',
};



// Отримуємо дані з API
export async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Добавляємо дані до API
export async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const dataRes = await response.json();
    return dataRes;
}

// Оновлюємо дані в API
export async function putData(url, data, id) {
    const response = await fetch(url + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    });
    const dataRes = await response.json();
    return dataRes;
}

// Видаляємо дані з API
export async function deleteData(url, id) {
    const response = await fetch(url + '/' + id, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}