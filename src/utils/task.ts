import { typeTask } from "../components/task/typeTask";

export const newTask = (title: string, complete: boolean= false):typeTask => {
    return {title, complete}
}

export const filterComplete = (t: typeTask) => t.complete
export const filterUnComplete = (t: typeTask) => !t.complete
export const sortTitleAsc = (t1: typeTask, t2: typeTask) => t1.title.localeCompare(t2.title)
export const sortTitleDesc = (t1: typeTask, t2: typeTask) => t2.title.localeCompare(t1.title)