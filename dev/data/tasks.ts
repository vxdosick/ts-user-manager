import { TaskStatus } from "../enums/TaskStatus";
import { ITask } from "../types/Task";
// task array
export const tasks: ITask[] = [
    {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        status: TaskStatus.CANCELLED,
        completeUser: "Alex"
    },
    {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        status: TaskStatus.DONE,
        completeUser: "Bob"
    },
    {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        status: TaskStatus.INPROGRESS,
        completeUser: "Jimmie"
    },
    {
        id: 4,
        title: "Task 3",
        description: "Task 4 description",
        status: TaskStatus.PENDING,
        completeUser: "Andy"
    },
    {
        id: 5,
        title: "Task 3",
        description: "Task 5 description",
        status: TaskStatus.DONE,
        completeUser: "Jony"
    },
]