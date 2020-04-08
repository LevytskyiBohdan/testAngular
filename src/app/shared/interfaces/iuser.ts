export interface IUser {
    id: string,
    fname: string,
    lname: string,
    age: number,
    address?: {
        city: string,
        str: string,
    },
    hobby?: Array<string>,
}
