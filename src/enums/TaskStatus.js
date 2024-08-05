"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = void 0;
// task status enumeration
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "Pending";
    TaskStatus["INPROGRESS"] = "In Progress";
    TaskStatus["DONE"] = "Done";
    TaskStatus["CANCELLED"] = "Cancelled";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
