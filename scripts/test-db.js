const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
    try {
        await prisma.$connect();
        console.log('✅ Connected to PostgreSQL (Neon) successfully!');

        // Test a simple query
        const count = await prisma.contact.count();
        console.log(`📊 Total contacts in database: ${count}`);

        await prisma.$disconnect();
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
    }
}

testConnection();