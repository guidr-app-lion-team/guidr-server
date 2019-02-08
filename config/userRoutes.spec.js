const server = require('../server');
const request = require('supertest');
const db = require('./dbConfig');

beforeEach(async () => {
  await db('users').truncate();
});

describe('users database', () => {  
  describe('get req to /user', () => {
    it('should return status code 200', async () => {
      let res = await request(server).get('/user')
      expect(res.status).toBe(200)
    })
    it('should return an empty array for user without data', async () => {
      let res = await request(server).get('/user')
      expect(res.body).toEqual([])
    })
    it('should return an array data for the user', async () => {
      await request(server)
        .post('/user')
        .send({ username: 'HoldDoor', name: 'Hodor', location: 'Salt Lake City' })
      let res = await request(server).get('/user')
      expect(res.body).toEqual([{ "id": 1, username: 'HoldDoor', name: 'Hodor', location: 'Salt Lake City' }])
    })
  })
  describe('post req to /user', () => {
    it('should return status code 201 if all fields are completed', async () => {
      let res = await request(server)
        .post('/user')
        .send({ username: 'Frodo', name: 'Hodor', location: 'Albuquerque' })
      expect(res.status).toBe(201)
    })
    it('should return status code 422 if data is not complete', async () => {
      let res = await request(server)
        .post('/user')
        .send({ username: 'ArcheAge' })
      expect(res.status).toBe(422)
    })

    it('should return json', async () => {
      let res = await request(server)
        .post('/user')
        .send({ username: 'HoldDoor', name: 'Hodor', location: 'Salt Lake City' })
      expect(res.type).toBe('application/json')
    })
  })
}) 
