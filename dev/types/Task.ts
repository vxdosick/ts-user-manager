import { TaskStatus } from "../enums/TaskStatus";
export interface ITask {
    id: number,
    title: string,
    description: string,
    status: TaskStatus,
    completeUser: string
}