const server = require('../server');
const request = require('supertest');
const db = require('./dbConfig');

beforeEach(async () => {
  await db('adventures').truncate();
});

describe('adventures database', () => {
  describe('get req to /adventures', () => {
    it('should return status code 200', async () => {
      let res = await request(server).get('/adventures')
      expect(res.status).toBe(200)
    })
    it('should return an empty array for adventure without data', async () => {
      let res = await request(server).get('/adventures')
      expect(res.body).toEqual([])
    })
    it('should return an array data for the user', async () => {
      await request(server)
        .post('/adventures')
        .send({ title: 'There and back', duration: '3 hours', location: 'Salt Lake City' })
      let res = await request(server).get('/adventures')
      expect(res.body).toEqual([{ "id": 1, title: 'There and back', duration: '3 hours', location: 'Salt Lake City' }])
    })
  })
  describe('post req to /adventures', () => {
    it('should return status code 201 if all fields are completed', async () => {
      let res = await request(server)
        .post('/adventures')
        .send({ title: 'bag end', duration: '3 hours', location: 'Albuquerque' })
      expect(res.status).toBe(201)
    })
    it('should return status code 422 if data is not complete', async () => {
      let res = await request(server)
        .post('/adventures')
        .send({ title: 'Dragon Lord' })
      expect(res.status).toBe(422)
    })

    it('should return json', async () => {
      let res = await request(server)
        .post('/adventures')
        .send({ title: 'There and back', duration: '3 hours', location: 'Salt Lake City' })
      expect(res.type).toBe('application/json')
    })
  })
}) 
