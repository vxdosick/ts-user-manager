import { Role } from "../enums/UserRole";
import { IAddress } from "./Address";
import { InterfacePhone } from "./Phone";
// user interface
export interface IUser {
    id: number,
    name: string,
    email: string,
    role: Role,
    address: IAddress,
    coordinates: [number, number],
    phoneNumber?: InterfacePhone
}