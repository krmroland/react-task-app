export function createTask() {
    return {
        type: "CREATE-TASK"
    };
}
export function deleteTask(id) {
    return {
        type: "DELETE-TASK",
        id
    };
}
export function storeTask(task) {
    return {
        type: "STORE-TASK",
        task
    };
}

export function editTask(id) {
    return {
        type: "EDIT-TASK",
        id
    };
}

export function updateTask(id) {
    return {
        type: "UPDATE-TASK",
        id
    };
}
export function showTask(id) {
    return {
        type: "SHOW-TASK",
        id
    };
}

export function filterTasks(key) {
    return {
        type: "FILTER-TASKS",
        key
    };
}

export function toggleTaskIsComplete(id) {
    return {
        type: "TOGGLE-IS-COMPLETE",
        id
    };
}
