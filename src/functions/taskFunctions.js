"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeUserInTask = exports.CreateTask = void 0;
const tasks_1 = require("../data/tasks");
const CreateTask = (id, title, description, status, completeUser, addToTasks) => {
    const newTask = {
        id: id,
        title: title,
        description: description,
        status: status,
        completeUser: completeUser
    };
    addToTasks ? tasks_1.tasks.push(newTask) : null;
    return addToTasks ? tasks_1.tasks : newTask;
};
exports.CreateTask = CreateTask;
const ChangeUserInTask = (taskId) => {
};
exports.ChangeUserInTask = ChangeUserInTask;
