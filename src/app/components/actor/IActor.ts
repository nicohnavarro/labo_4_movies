import { ICountry } from '../country/ICountry';

export interface IActor {
    id?:string,
    name:string,
    surname:string,
    gender: "Male" | "Famale",
    dateOfBirth:Date,
    nacionality:ICountry,
    photo:string,
}