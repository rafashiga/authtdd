const bcrypt = require('bcryptjs')
const { User } = require('../../src/app/models')
const truncate = require('../utils/trucate')


describe('User', () => {
    beforeEach(async () => {
        await truncate()
    })

    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Rafael',
            email: 'rafael@email.com',
            password: '123123'
        })


        const compareHash = await bcrypt.compare('123123', user.password_hash)

        expect(compareHash).toBe(true)
    })
})
