import { Request, Response } from 'express';
import PersonService from '../services/PersonService';

export default class PersonController {
  private service: PersonService;
  constructor() {
    this.service = new PersonService();
  }

  public async getAllPersons(req: Request, res: Response): Promise<void> {
    const { status, data } = await this.service.getAll();
    res.status(status).json(data);
  }

  public async getPersonById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { status, data } = await this.service.getById(Number(id));
    res.status(status).json(data);
  }

  public async createPerson(req: Request, res: Response): Promise<void> {
    const personDetails = req.body;
    const { status, data } = await this.service.create(personDetails);
    res.status(status).json(data);
  }

  public async updatePerson(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const personDetails = req.body;
    const { status, data } = await this.service.update(Number(id), personDetails);
    res.status(status).json(data);
  }

  public async deletePerson(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { status, data } = await this.service.delete(Number(id));
    res.status(status).json(data);
  }
}
