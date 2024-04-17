import { IAdmin } from "./IUser";

export interface IAdminRegistration extends IAdmin {
    email: string;
}