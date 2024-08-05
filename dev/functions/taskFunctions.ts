import { tasks } from "../data/tasks"
import { ITask } from "../types/Task"
import { TaskStatus } from "../enums/TaskStatus"

// Function for outputting all tasks 
export const getTasks = (): ITask[] => {
    return tasks;
}
// Creating a task
export const CreateTask = (
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
// Changing user in task
export const ChangeUserInTask = (
    taskId: number, 
    newUser: string
): ITask | string => {
    const changedTask: ITask | undefined = tasks.find(task => task.id == taskId)
    if (changedTask && changedTask.status != (TaskStatus.CANCELLED || TaskStatus.DONE)) {
        changedTask.completeUser = newUser;
        return changedTask;
    } else {
        return "Task not found or already completed or cancelled";
    }
}
// Changing task status
export const ChangeTaskStatus = (
    taskId: number, 
    newStatus: TaskStatus
): ITask | string => {
    const changedStatusTask: ITask | undefined = tasks.find(task => task.id == taskId)
    if (changedStatusTask) {
        changedStatusTask.status = newStatus
        return changedStatusTask
    } else {
        return "Task not found"
    }
}
// Getting a group of tasks with a certain status
export const getTaskGruppedByStatus = (
    statusInfo: TaskStatus
): ITask[] | string => {
    const tasksGroupedByStatus: ITask[] | undefined = tasks.filter(task => task.status == statusInfo)
    if (tasksGroupedByStatus) {
        return tasksGroupedByStatus
    } else {
        return "Task with this status not found"
    }
}