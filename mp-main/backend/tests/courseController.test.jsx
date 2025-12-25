const request = require('supertest');
const app = require('../server'); // Adjust if necessary

describe('Course Controller', () => {
  it('should create a new course', async () => {
    const response = await request(app)
      .post('/api/courses')
      .send({
        title: 'Test Course',
        description: 'This is a test course',
        image: 'test_image_url',
      });
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });

  it('should get all courses', async () => {
    const response = await request(app).get('/api/courses');
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
  });
});
