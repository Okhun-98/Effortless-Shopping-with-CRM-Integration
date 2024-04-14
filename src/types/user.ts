export interface IUser {
    [x: string]: any;
    id: number;
    name:{
firstname: string;
lastname: string;
    }
    email: string;
    password: string;
    phone: string;
    adress: string;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}
