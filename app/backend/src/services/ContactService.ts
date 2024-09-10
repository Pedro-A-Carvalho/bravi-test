import SequelizeContact from "../database/models/SequelizeContact";
import SequelizePerson from "../database/models/SequelizePerson";
import { Contact } from "../types/Contact";
import { ContactData } from "../types/ContactData";
import { ServiceResponse } from "../types/ServiceResponse";


export default class ContactService {
    private model: typeof SequelizeContact;

    constructor() {
        this.model = SequelizeContact;
    }

    public async getById(id: number): Promise<ServiceResponse<Contact>> {
        let contact = await this.model.findByPk(id);
        if (!contact) {
            return { status: 404, data: { message: 'Contact not found' } };
        }
        return { status: 200, data: contact.dataValues as Contact };
    }

    public async create(contactData: ContactData): Promise<ServiceResponse<Contact>> {
        const dataToCreate = {
            ...contactData,
            description: contactData.description ?? ''
        };
        const personExists = await this.verifyPersonId(contactData.personId);
        if (!personExists) {
            return { status: 404, data: { message: 'Person not found' } };
        }

        let contact = await this.model.create(dataToCreate);
        return { status: 201, data: contact.dataValues as Contact };
    }

    public async update(id: number, contactData: ContactData): Promise<ServiceResponse<Contact>> {
        let contact = await this.model.findByPk(id);
        if (!contact) {
            return { status: 404, data: { message: 'Contact not found' } };
        }
        const personExists = await this.verifyPersonId(contactData.personId);
        if (!personExists) {
            return { status: 404, data: { message: 'Person not found' } };
        }
        await contact.update(contactData);
        contact = await this.model.findByPk(id);
        if (!contact) {
            return { status: 404, data: { message: 'Contact not found after update' } };
        }
        return { status: 200, data: contact.dataValues as Contact };
    }

    public async delete(id: number): Promise<ServiceResponse<Contact>> {
        let contact = await this.model.findByPk(id);
        if (!contact) {
            return { status: 404, data: { message: 'Contact not found' } };
        }
        await contact.destroy();
        return { status: 200, data: contact.dataValues as Contact };
    }

    public async verifyPersonId(personId: number): Promise<boolean> {
        let person = await SequelizePerson.findByPk(personId);
        return !!person;
    }
}