import { tasks } from "../data/tasks"
import { ITask } from "../types/Task"
import { TaskStatus } from "../enums/TaskStatus"

export const CreateTask: Function = (
    id: number,
    title: string,
    description: string,
    status: TaskStatus,
    completeUser: string,
    addToTasks: boolean
): ITask | ITask[] => {
    const newTask: ITask = {
        id: id,
        title: title,
        description: description,
        status: status,
        completeUser: completeUser
    }
    addToTasks ? tasks.push(newTask) : null
    return addToTasks ? tasks : newTask
}
export const ChangeUserInTask: Function = (taskId: number) => {
    
}