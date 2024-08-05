import { TaskStatus } from "../enums/TaskStatus";
// task interface
export interface ITask {
    id: number,
    title: string,
    description: string,
    status: TaskStatus,
    completeUser: string
}