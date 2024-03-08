export interface User {
    id : string ,
    userName : string,
    firstName : string,
    lastName : string,
    passwordHash : string,
    passwordSalt : string,
    birthYear : number,
    identificationNumber : string,
    userClaims : []
}

export interface AddUserDto{
    userName: string,
    password: string,
    firstName: string,
    lastName: string,
    identificationNumber:string,
    birthYear: number
}
