import { Request, Response } from 'express';
import ContactService from '../services/ContactService';

export default class ContactController {
  private service: ContactService;
  constructor() {
    this.service = new ContactService();
  }

  public async getContactById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { status, data } = await this.service.getById(Number(id));
    res.status(status).json(data);
  }

  public async createContact(req: Request, res: Response): Promise<void> {
    const ContactDetails = req.body;
    const { status, data } = await this.service.create(ContactDetails);
    res.status(status).json(data);
  }

  public async updateContact(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const ContactDetails = req.body;
    const { status, data } = await this.service.update(Number(id), ContactDetails);
    res.status(status).json(data);
  }

  public async deleteContact(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { status, data } = await this.service.delete(Number(id));
    res.status(status).json(data);
  }
}
