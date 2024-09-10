import PersonService from '../services/PersonService';
import SequelizePerson from '../database/models/SequelizePerson';
import { Person } from '../types/Person';
import { PersonData } from '../types/PersonData';
import { ServiceResponse } from '../types/ServiceResponse';

// Mock the Sequelize model
jest.mock('../database/models/SequelizePerson');

describe('PersonService', () => {
    let personService: PersonService;

    beforeEach(() => {
        personService = new PersonService();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });

    describe('getAll', () => {
        it('should return all persons', async () => {
            const mockPersons = [{ dataValues: { id: 1, name: 'test' } }, { dataValues: { id: 2, name: 'test2' } }];
            (SequelizePerson.findAll as jest.Mock).mockResolvedValue(mockPersons);

            const response: ServiceResponse<Person[]> = await personService.getAll();

            expect(response.status).toBe(200);
            expect(response.data).toEqual([{ id: 1, name: 'test' }, { id: 2, name: 'test2' }]);
        });
    });

    describe('getById', () => {
        it('should return a person by ID', async () => {
            const mockPerson = { dataValues: { id: 1, name: 'test' } };
            (SequelizePerson.findByPk as jest.Mock).mockResolvedValue(mockPerson);

            const response: ServiceResponse<Person> = await personService.getById(1);

            expect(response.status).toBe(200);
            expect(response.data).toEqual({ id: 1, name: 'test' });
        });

        it('should return 404 if person not found', async () => {
            (SequelizePerson.findByPk as jest.Mock).mockResolvedValue(null);

            const response: ServiceResponse<Person> = await personService.getById(1);

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Person not found' });
        });
    });

    describe('create', () => {
        it('should create a new person', async () => {
            const personData: PersonData = { name: 'test' };
            const mockPerson = { dataValues: { id: 1, name: 'test' } };
            (SequelizePerson.create as jest.Mock).mockResolvedValue(mockPerson);

            const response: ServiceResponse<Person> = await personService.create(personData);

            expect(response.status).toBe(201);
            expect(response.data).toEqual({ id: 1, name: 'test' });
        });
    });

    describe('update', () => {
        it('should update an existing person', async () => {
            const personData: PersonData = { name: 'test 2' };
            const mockPerson = { 
                dataValues: { id: 1, name: 'test' }, 
                update: jest.fn().mockResolvedValue({ dataValues: { id: 1, name: 'test 2' } }) 
            };
            (SequelizePerson.findByPk as jest.Mock).mockResolvedValueOnce(mockPerson).mockResolvedValueOnce({ dataValues: { id: 1, name: 'test 2' } });

            const response: ServiceResponse<Person> = await personService.update(1, personData);

            expect(response.status).toBe(200);
            expect(response.data).toEqual({ id: 1, name: 'test 2' });
        });

        it('should return 404 if person not found', async () => {
            (SequelizePerson.findByPk as jest.Mock).mockResolvedValue(null);

            const response: ServiceResponse<Person> = await personService.update(1, { name: 'test 2' });

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Person not found' });
        });
    });

    describe('delete', () => {
        it('should delete an existing person', async () => {
            const mockPerson = { dataValues: { id: 1, name: 'test' }, destroy: jest.fn() };
            (SequelizePerson.findByPk as jest.Mock).mockResolvedValue(mockPerson);

            const response: ServiceResponse<Person> = await personService.delete(1);

            expect(response.status).toBe(200);
            expect(response.data).toEqual({ id: 1, name: 'test' });
        });

        it('should return 404 if person not found', async () => {
            (SequelizePerson.findByPk as jest.Mock).mockResolvedValue(null);

            const response: ServiceResponse<Person> = await personService.delete(1);

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Person not found' });
        });
    });
});