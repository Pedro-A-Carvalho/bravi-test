const request = require('supertest');
import { App } from '../app'; // Adjust the import path as necessary

describe('GET /', () => {
  it('should return 200 OK with { ok: true }', async () => {
    const response = await request(new App().app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ ok: true });
  });
});

describe('GET /person', () => {
    it('should return 200 OK with { [person1, person2, ...] }', async () => {
        const response = await request(new App().app).get('/person');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        response.body.forEach((item: any) => {
          expect(typeof item).toBe('object');
        });
    });
});

describe('POST /person', () => {
    it('should return 201 Created with the newly created person', async () => {
        const response = await request(new App().app)
        .post('/person')
        .send({ name: 'John Doe' });
        expect(response.status).toBe(201);
        expect(typeof response.body).toBe('object');
        expect(response.body.name).toBe('John Doe');
    });
});

describe('GET /person/:id', () => {
    it('should return 200 OK with the person with the specified ID', async () => {
        const response = await request(new App().app).get('/person/1');
        expect(response.status).toBe(200);
        expect(typeof response.body).toBe('object');
        expect(response.body.id).toBe(1);
        expect(Array.isArray(response.body.contacts)).toBe(true);
    });
});