import { IUser } from "../types/User";
import { Role } from "../enums/UserRole";
// user array
export const users: IUser[] = [
    {
        id: 1,
        name: "Alex",
        email: "a@b.com",
        role: Role.USER,
        address: {
            street: "1 Main St",
            city: "Boston",
            zipCode: 33333
        },
        coordinates: [40, 90],
        phoneNumber: "+111111111"
    },
    {
        id: 2,
        name: "Bob",
        email: "b@b.com",
        role: Role.GUEST,
        address: {
            street: "2 Main St",
            city: "London",
            zipCode: 11111
        },
        coordinates: [-100, 94],
        phoneNumber: "+222222222"
    },
    {
        id: 3,
        name: "Jimmie",
        email: "j@b.com",
        role: Role.ADMIN,
        address: {
            street: "3 Main St",
            city: "Warsaw",
            zipCode: 22222
        },
        coordinates: [83, -2],
        phoneNumber: "+333333333"
    },
]