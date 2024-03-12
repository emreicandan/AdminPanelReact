import { BaseModel } from "./base/BaseModel";

export interface Product extends BaseModel<string>{
    name : string,
    description : string,
    price : number,
    isActive : boolean
}