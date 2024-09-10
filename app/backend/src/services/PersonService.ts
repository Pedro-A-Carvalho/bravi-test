import SequelizePerson from "../database/models/SequelizePerson";
import { Person } from "../types/Person";
import { PersonData } from "../types/PersonData";
import { ServiceResponse } from "../types/ServiceResponse";


export default class PersonService {
    private model: typeof SequelizePerson;

    constructor() {
        this.model = SequelizePerson;
    }

    public async getAll(): Promise<ServiceResponse<Person[]>> {
        let persons = await this.model.findAll();
        return { status: 200, data: persons.map(person => person.dataValues) };
    }

    public async getById(id: number): Promise<ServiceResponse<Person>> {
        let person = await this.model.findByPk(id,{
            include:[{association:'contacts'}]
        });
        if (!person) {
            return { status: 404, data: { message: 'Person not found' } };
        }
        return { status: 200, data: person.dataValues };
    }

    public async create(personData: PersonData): Promise<ServiceResponse<Person>> {
        let person = await this.model.create(personData);
        return { status: 201, data: person.dataValues };
    }

    public async update(id: number, personData: PersonData): Promise<ServiceResponse<Person>> {
        let person = await this.model.findByPk(id);
        if (!person) {
            return { status: 404, data: { message: 'Person not found' } };
        }
        await person.update(personData);
        person = await this.model.findByPk(id);
        if (!person) {
            return { status: 404, data: { message: 'Person not found after update' } };
        }
        return { status: 200, data: person.dataValues };
    }

    public async delete(id: number): Promise<ServiceResponse<Person>> {
        let person = await this.model.findByPk(id);
        if (!person) {
            return { status: 404, data: { message: 'Person not found' } };
        }
        await person.destroy();
        return { status: 200, data: person.dataValues };
    }
}