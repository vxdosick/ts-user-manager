import { Role } from "../enums/UserRole"
import { IAddress } from "../types/Address"
import { InterfacePhone } from "../types/Phone"
import { IUser } from "../types/User"
import { users } from "../data/users"
// user get functions
export const getUser = (): IUser[] => {
    return users
}
// user add functions
export const AddUser = (
    id: number, 
    name: string, 
    email: string, 
    role: Role, 
    address: IAddress, 
    coordinates: [number, number],
    addToUsers: boolean,
    phoneNumber?: InterfacePhone
): IUser | IUser[] => {
    const newUser: IUser = {
        id: id,
        name: name,
        email: email,
        role: role,
        address: address,
        coordinates: coordinates,
        phoneNumber: phoneNumber ? phoneNumber : "Not specified"
    }
    addToUsers ? users.push(newUser) : null
    return addToUsers ? users : newUser
}