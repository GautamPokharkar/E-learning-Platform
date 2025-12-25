const request = require('supertest');
const app = require('../server'); // Adjust if necessary

describe('User Controller', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/users/register')
      .send({
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/users/login')
      .send({
        email: 'john@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
