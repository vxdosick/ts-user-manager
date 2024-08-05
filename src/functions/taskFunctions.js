"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskGruppedByStatus = exports.ChangeTaskStatus = exports.ChangeUserInTask = exports.CreateTask = exports.getTasks = void 0;
const tasks_1 = require("../data/tasks");
const TaskStatus_1 = require("../enums/TaskStatus");
const getTasks = () => {
    return tasks_1.tasks;
};
exports.getTasks = getTasks;
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
const ChangeUserInTask = (taskId, newUser) => {
    const changedTask = tasks_1.tasks.find(task => task.id == taskId);
    if (changedTask && changedTask.status != (TaskStatus_1.TaskStatus.CANCELLED || TaskStatus_1.TaskStatus.DONE)) {
        changedTask.completeUser = newUser;
        return changedTask;
    }
    else {
        return "Task not found or already completed or cancelled";
    }
};
exports.ChangeUserInTask = ChangeUserInTask;
const ChangeTaskStatus = (taskId, newStatus) => {
    const changedStatusTask = tasks_1.tasks.find(task => task.id == taskId);
    if (changedStatusTask) {
        changedStatusTask.status = newStatus;
        return changedStatusTask;
    }
    else {
        return "Task not found";
    }
};
exports.ChangeTaskStatus = ChangeTaskStatus;
const getTaskGruppedByStatus = (statusInfo) => {
    const tasksGroupedByStatus = tasks_1.tasks.filter(task => task.status == statusInfo);
    if (tasksGroupedByStatus) {
        return tasksGroupedByStatus;
    }
    else {
        return "Task with this status not found";
    }
};
exports.getTaskGruppedByStatus = getTaskGruppedByStatus;
