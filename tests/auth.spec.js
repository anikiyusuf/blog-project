const request = require('supertest')
const {connect} = require('./database')
const userModel = require('../models/user.model')
const app = require('../app');

describe('Auth: Signup', () => {
    let conn;

    beforeAll(async () => {
        conn = await connect()
    })

    afterEach(async () => {
        await conn.cleanup()
    })

    afterAll(async () => {
        await conn.disconnect()
    })

    it('should signup a user', async () => {
        const response = await request(app).post('/signup')
        .set('content-type', 'application/json')
        .send({ 
            username: 'anikiyusuf', 
            password: '654321', 
            firstName: 'Yusuf',
            lastName: 'Aniki',
            email: 'anikiyusuf99@mail.com'
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('message')
        expect(response.body).toHaveProperty('user')
        expect(response.body.user).toHaveProperty('username', 'anikiyusuf')
        expect(response.body.user).toHaveProperty('first_name', 'Yusuf')
        expect(response.body.user).toHaveProperty('last_name', 'Aniki')
        expect(response.body.user).toHaveProperty('email', 'anikiyusuf99@mail.com')        
    })


    it('should login a user', async () => {
        // create user in out db
        const user = await userModel.create({ username: 'anikiyusuf99@gmail.com', password: '654321'});

        // login user
        const response = await request(app)
        .post('/login')
        .set('content-type', 'application/json')
        .send({ 
            username: 'anikiyusuf99@gmail.com', 
            password: '654321'
        });
    

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')      
    })
})