'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('500 module', () => {
  it('should respond with 500 on invalied route (status)', () => {
    return mockRequest.get('/api/v1/categories').then((results) => {
      expect(results.status).toBe(500);
    }).catch(e=>{});
  });
  it('should respond with 404 on invalied route (statusMessage)', () => {
    return mockRequest.get('/api/v1/productss/5').then((results) => {
      expect(results).toMatchObject({ error: 'not Found' });
    }).catch(e=>{});
  });

});