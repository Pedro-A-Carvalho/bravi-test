import { Contact } from "./Contact";

export interface Person {
    id: number;
    name: string;
}

export interface PersonWithContacts extends Person {   
    contacts: Contact[];
}