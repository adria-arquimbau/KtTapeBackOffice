require('dotenv').config()

const { expect } = require('chai')
const unregisterUser = require('.')
const { database, models: { User } } = require('ktbo-data')
const { random: { number, boolean, value } } = require('ktbo-utils')
const { random } = Math
const bcrypt = require('bcryptjs')

const { env: { DB_URL_TEST }} = process

describe('logic - unregister user', () => {

    before(() => database.connect(DB_URL_TEST))

    let company, country, email, password, id, role, adminId

    beforeEach(async () => {

        admin = {
            company: `company-${random()}`,
            country: `country-${random()}`,
            email: `email-${random()}@domain.com`,
            password: `password-${random()}`,
            role: value('admin')
        }

        company = `company-${random()}`
        country = `country-${random()}`
        email = `email-${random()}@domain.com`
        password = `password-${random()}`
        role = value('regular')

        await User.deleteMany()

        const user = await User.create({ company, country, email, password: await bcrypt.hash(password, 10), role })
        id = user.id

        const adminUser = await User.create({ company: admin.company, country: admin.country, email: admin.email, password: await bcrypt.hash(admin.password, 10), role: admin.role })
        adminId = adminUser.id

    })

    it('should succeed on correct data', async () => {
        
        const result = await unregisterUser(id, adminId, admin.password)
            
        expect(result).not.to.exist
        const user = await User.findById(id)
        expect(user).not.to.exist
    })

    it('should fail on unexisting user', async () => {
        try {
            await unregisterUser('5d5d5530531d455f75da9fF9', adminId, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`User with id 5d5d5530531d455f75da9fF9 doesn't exist`)    
        }
    })

    it('should fail on empty user', async () => {
        try {
            await unregisterUser('', adminId, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`userId is empty or blank`)    
        }
    })

    it('should fail on a number user', async () => {
        try {
            await unregisterUser(123, adminId, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`userId with value 123 is not a string`)    
        }
    })

    it('should fail on a array user', async () => {
        try {
            await unregisterUser([1, 2, 3], adminId, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`userId with value 1,2,3 is not a string`)    
        }
    })

    it('should fail on a boolean user', async () => {
        try {
            await unregisterUser(true, adminId, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`userId with value true is not a string`)    
        }
    })

    it('should fail on unexisting adminId', async () => {
        try {
            await unregisterUser(id, '5d5d5530531d455f75da9fF9', admin.password)
        } catch (error) {
            expect(error.message).to.equal(`Admin with id 5d5d5530531d455f75da9fF9 doesn't exist`)    
        }
    })

    it('should fail on empty adminId', async () => {
        try {
            await unregisterUser(id, '', admin.password)
        } catch (error) {
            expect(error.message).to.equal(`adminId is empty or blank`)    
        }
    })

    it('should fail on a number adminId', async () => {
        try {
            await unregisterUser(id, 123, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`adminId with value 123 is not a string`)    
        }
    })

    it('should fail on a array adimnId', async () => {
        try {
            await unregisterUser(id, [1, 2, 3], admin.password)
        } catch (error) {
            expect(error.message).to.equal(`adminId with value 1,2,3 is not a string`)    
        }
    })

    it('should fail on a boolean adminId', async () => {
        try {
            await unregisterUser(id, true, admin.password)
        } catch (error) {
            expect(error.message).to.equal(`adminId with value true is not a string`)    
        }
    })

    it('should fail on existing adminId, but wrong password', async () => {
        try {
            unregisterUser(id, adminId,'wrong-password')         
        } catch (error) {
            expect(error.message).to.equal('wrong credentials')
        }
    })

    it('should fail on empty password', async () => {
        try {
            await unregisterUser(id, adminId, '')
        } catch (error) {
            expect(error.message).to.equal(`password is empty or blank`)    
        }
    })

    it('should fail on a number password', async () => {
        try {
            await unregisterUser(id, adminId, 123)
        } catch (error) {
            expect(error.message).to.equal(`password with value 123 is not a string`)    
        }
    })

    it('should fail on a array password', async () => {
        try {
            await unregisterUser(id, adminId, [1, 2, 3])
        } catch (error) {
            expect(error.message).to.equal(`password with value 1,2,3 is not a string`)    
        }
    })

    it('should fail on a boolean password', async () => {
        try {
            await unregisterUser(id, adminId, true)
        } catch (error) {
            expect(error.message).to.equal(`password with value true is not a string`)    
        }
    })

    after(() => database.disconnect())
})