import { BaseModel } from "./base/BaseModel";

export interface User extends BaseModel<string> {
    userName : string,
    firstName : string,
    lastName : string,
    passwordHash : string,
    passwordSalt : string,
    birthYear : number,
    identificationNumber : string,
    userClaims : []
};
