import { createStore } from "redux";

import TasksReducer from "./reducers/TasksReducer";

const store = createStore(TasksReducer);

export { store };
