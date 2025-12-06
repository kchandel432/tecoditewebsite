const { PrismaClient } = require('@prisma/client')

async function testConnection() {
    console.log('🔧 Testing database connection...')

    const prisma = new PrismaClient({
        log: ['query', 'info', 'warn', 'error'],
    })

    try {
        const start = Date.now()
        await prisma.$connect()
        const connectTime = Date.now() - start

        console.log(`✅ Connected to database in ${connectTime}ms`)

        // Test a simple query
        const queryStart = Date.now()
        const count = await prisma.contact.count()
        const queryTime = Date.now() - queryStart

        console.log(`📊 Total contacts: ${count}`)
        console.log(`⏱️ Query took: ${queryTime}ms`)

        if (queryTime > 1000) {
            console.warn('⚠️ WARNING: Database queries are slow!')
        }

    } catch (error) {
        console.error('❌ Connection failed:', error.message)
    } finally {
        await prisma.$disconnect()
    }
}

testConnection()