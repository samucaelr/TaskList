import { typeTask } from "../types/typeTask";
import { tagList } from "./tag";

export const newTask = ( task: typeTask ): typeTask => {
    const {title, complete = false, detail, dateFinish, priority = 1, tags = tagList.map(({name}) => name), owner} = task
    return {
        title, 
        complete,
        detail,
        dateFinish, 
        priority, 
        tags, 
        owner 
    }
}

export const filterComplete = (t: typeTask) => t.complete
export const filterUnComplete = (t: typeTask) => !t.complete
export const sortTitleAsc = (t1: typeTask, t2: typeTask) => t1.title.localeCompare(t2.title)
export const sortTitleDesc = (t1: typeTask, t2: typeTask) => t2.title.localeCompare(t1.title)
export const sortPriorityAsc = (t1: typeTask, t2: typeTask) => t2.priority - t1.priority