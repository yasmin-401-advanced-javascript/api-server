'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('server module', () => {
  describe('category', () => {
    it('should respond with 200 on valied route', () => {
      return mockRequest.get('/api/v1/categories').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied method', () => {
      return mockRequest.get('/api/v1/categories/4').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied route', () => {
      return mockRequest.post('/api/v1/categories').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied method', () => {
      return mockRequest.put('/api/v1/categories/4').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied method', () => {
      return mockRequest.delete('/api/v1/categories/4').then((results) => {
        expect(results.status).toBe(200);
      });
    });
  });
  describe('products', () => {
    it('should respond with 200 on valied route', () => {
      return mockRequest.get('/api/v1/products').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied method', () => {
      return mockRequest.get('/api/v1/products/4').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied route', () => {
      return mockRequest.post('/api/v1/products').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied method', () => {
      return mockRequest.put('/api/v1/products/4').then((results) => {
        expect(results.status).toBe(200);
      });
    });
    it('should respond with 200 on valied method', () => {
      return mockRequest.delete('/api/v1/products/4').then((results) => {
        expect(results.status).toBe(200);
      });
    });
  });
});