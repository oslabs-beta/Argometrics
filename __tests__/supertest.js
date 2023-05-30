// tests our express routes
const request = require('supertest');
const server = 'http://localhost:6000';

describe("route integration", () => { 
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  })

  describe('/api/auth/login', () => {
    describe('POST', () => {
      it('responds with 200 status and json content type', () => {
        return request(server)
          .post('/api/auth/login')
          .set('Authorization', 'Basic ' + Buffer.from('auth:auth').toString('base64'))
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })
    })
  })
  describe('/api/auth/register', () => {
    describe('GET', () => {
      it('responds with 200 status and json content type', () => {
        return request(server)
          .get('/api/auth/register')
          .set('Accept', 'application/json')
          .send(JSON.stringify({
            username: 'test',
            password: 'test'
          }))
          .expect('Content-Type', /json/)
          .expect(200)
      })
    })
  })

  describe('/api/cluster/get', () => {
    describe('GET', () => {
      it('responds with 200 status and json content type', () => {
        return request(server)
          .get('/api/cluster/get')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })
    })
  })

  describe('/api/cluster/add', () => {
    describe('POST', () => {
      it('responds with 200 status and json content type', () => {
        return request(server)
          .get('/api/cluster/post')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })
    })
  })

})