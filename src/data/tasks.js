"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = void 0;
const TaskStatus_1 = require("../enums/TaskStatus");
exports.tasks = [
    {
        id: 1,
        title: "Task 1",
        description: "Task 1 description",
        status: TaskStatus_1.TaskStatus.CANCELLED,
        completeUser: "Alex"
    },
    {
        id: 2,
        title: "Task 2",
        description: "Task 2 description",
        status: TaskStatus_1.TaskStatus.DONE,
        completeUser: "Bob"
    },
    {
        id: 3,
        title: "Task 3",
        description: "Task 3 description",
        status: TaskStatus_1.TaskStatus.INPROGRESS,
        completeUser: "Jimmie"
    },
];
