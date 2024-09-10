import ContactService from '../services/ContactService';
import SequelizeContact from '../database/models/SequelizeContact';
import { Contact } from '../types/Contact';
import { ContactData } from '../types/ContactData';
import { ServiceResponse } from '../types/ServiceResponse';

// Mock the Sequelize model
jest.mock('../database/models/SequelizeContact');

describe('ContactService', () => {
    let contactService: ContactService;

    beforeEach(() => {
        contactService = new ContactService();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });
    
    describe('getById', () => {
        it('should return a contact by ID', async () => {
            const mockContact = { dataValues: { id: 1, type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' } };
            (SequelizeContact.findByPk as jest.Mock).mockResolvedValue(mockContact);

            const response: ServiceResponse<Contact> = await contactService.getById(1);

            expect(response.status).toBe(200);
            expect(response.data).toEqual({ id: 1, type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' });
        });

        it('should return 404 if contact not found', async () => {
            (SequelizeContact.findByPk as jest.Mock).mockResolvedValue(null);

            const response: ServiceResponse<Contact> = await contactService.getById(1);

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Contact not found' });
        });
    });

    describe('create', () => {
        it('should create a new contact', async () => {
            const contactData: ContactData = { type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' };
            const mockContact = { dataValues: { id: 1, type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' } };
            (SequelizeContact.create as jest.Mock).mockResolvedValue(mockContact);
            jest.spyOn(contactService, 'verifyPersonId').mockResolvedValue(true);

            const response: ServiceResponse<Contact> = await contactService.create(contactData);

            expect(response.status).toBe(201);
            expect(response.data).toEqual({ id: 1, type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' });
        });

        it('should return 404 if person not found', async () => {
            const contactData: ContactData = { type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' };
            jest.spyOn(contactService, 'verifyPersonId').mockResolvedValue(false);

            const response: ServiceResponse<Contact> = await contactService.create(contactData);

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Person not found' });
        });
    });

    describe('update', () => {
        it('should update an existing contact', async () => {
            const contactData: ContactData = { type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' };
            const mockContact = { 
                dataValues: { id: 1, type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' }, 
                update: jest.fn().mockResolvedValue({ dataValues: { id: 1, type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' } }) 
            };
            (SequelizeContact.findByPk as jest.Mock).mockResolvedValueOnce(mockContact).mockResolvedValueOnce({ dataValues: { id: 1, type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' } });

            const response: ServiceResponse<Contact> = await contactService.update(1, contactData);

            expect(response.status).toBe(200);
            expect(response.data).toEqual({ id: 1, type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' });
        });

        it('should return 404 if contact not found', async () => {
            (SequelizeContact.findByPk as jest.Mock).mockResolvedValue(null);

            const response: ServiceResponse<Contact> = await contactService.update(1, { type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' });

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Contact not found' });
        });

        it('should return 404 if contact not found after update', async () => {
            const contactData: ContactData = { type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' };
            const mockContact = { 
                dataValues: { id: 1, type: 'e-mail', description: 'Test', personId: 1, contact: 'test@example.com' }, 
                update: jest.fn().mockResolvedValue({ dataValues: { id: 1, type: 'e-mail', description: 'Test Updated', personId: 1, contact: 'test@example.com' } }) 
            };
            (SequelizeContact.findByPk as jest.Mock).mockResolvedValueOnce(mockContact).mockResolvedValueOnce(null);

            const response: ServiceResponse<Contact> = await contactService.update(1, contactData);

            expect(response.status).toBe(404);
            expect(response.data).toEqual({ message: 'Contact not found after update' });
        });
    });
});