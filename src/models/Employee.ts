export default class Employee {
    id: number;
    lastname: string;
    firstname: string;
    nationality: string;

    constructor(
        id: number,
        lastname: string,
        firstname: string,
        nationality: string
    ) {
        this.id = id;
        this.lastname = lastname;
        this.firstname = firstname;
        this.nationality = nationality;
    }
} 