const request = require('supertest');
const server = require('./index'); // Import server đã khởi tạo

afterAll((done) => {
  server.close(done); // Đóng server sau khi test xong
});

describe('GET /', () => {
  it('should return Hello, CI/CD World!', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, CI/CD World!');
  });
});