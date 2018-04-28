function fetchTasks() {
    let tasks = JSON.parse(window.localStorage.getItem("tasks"));

    if (!tasks) {
        //seed initial data
        tasks = [
            {
                id: new Date().getTime(),
                name: "Make it to Andela no mater how long it takes",
                isComplete: false
            }
        ];
        window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    return tasks;
}

let initialState = {
    tasks: fetchTasks(),
    isCreatingTask: false
};
export default function(state = initialState, action) {
    switch (action.type) {
        case "ADD-TASK":
            return state.tasks.concat({
                name: action.name,
                completed: false,
                id: String(new Date())
            });
        case "FILTER-TASKS":
            if (!action.key) {
                return { ...state, tasks: fetchTasks() };
            }
            const key = action.key.toLowerCase();

            return {
                ...state,
                //make sure we are filtering directly from all tasks
                tasks: fetchTasks().filter(task => {
                    return task.name.toLowerCase().includes(key);
                })
            };

        case "CREATE-TASK":
            return {
                ...state,
                isCreatingTask: !state.isCreatingTask
            };

        case "STORE-TASK":
            const tasks = state.tasks.concat({
                ...action.task,
                id: new Date().getTime()
            });

            window.localStorage.setItem("tasks", JSON.stringify(tasks));

            return {
                ...state,
                isCreatingTask: false,
                tasks
            };
        case "DELETE-TASK":
            const deleteIndex = state.tasks.findIndex(
                task => task.id === action.id
            );

            if (!deleteIndex) {
                return state;
            }
            state = {
                ...state,
                tasks: [
                    ...state.tasks.slice(0, deleteIndex),
                    ...state.tasks.slice(deleteIndex + 1)
                ]
            };

            window.localStorage.setItem("tasks", JSON.stringify(state.tasks));

            return state;

        case "TOGGLE-IS-COMPLETE":
            state = {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id !== action.id) {
                        return task;
                    }
                    return { ...task, isComplete: !task.isComplete };
                })
            };
            window.localStorage.setItem("tasks", JSON.stringify(state.tasks));
            return state;

        default:
            return state;
    }
}
