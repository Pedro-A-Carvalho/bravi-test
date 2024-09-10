import SequelizeContact from "../database/models/SequelizeContact";
import SequelizePerson from "../database/models/SequelizePerson"

export default interface SequelizePersonWithContacts extends SequelizePerson {
    contacts: SequelizeContact[];
}