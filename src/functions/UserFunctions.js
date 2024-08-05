"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUser = exports.getUser = void 0;
const users_1 = require("../data/users");
// user get functions
const getUser = () => {
    return users_1.users;
};
exports.getUser = getUser;
// user add functions
const AddUser = (id, name, email, role, address, coordinates, addToUsers, phoneNumber) => {
    const newUser = {
        id: id,
        name: name,
        email: email,
        role: role,
        address: address,
        coordinates: coordinates,
        phoneNumber: phoneNumber ? phoneNumber : "Not specified"
    };
    addToUsers ? users_1.users.push(newUser) : null;
    return addToUsers ? users_1.users : newUser;
};
exports.AddUser = AddUser;
