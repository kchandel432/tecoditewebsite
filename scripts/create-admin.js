const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    const email = 'admin@techodite.com'
    const password = 'admin123'

    // Check if admin already exists
    const existingAdmin = await prisma.user.findUnique({
        where: { email }
    })

    if (existingAdmin) {
        console.log('Admin user already exists')
        process.exit(0)
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create admin user
    await prisma.user.create({
        data: {
            email,
            name: 'Admin User',
            password: hashedPassword,
            role: 'admin',
        }
    })

    console.log('✅ Admin user created successfully!')
    console.log('Email:', email)
    console.log('Password:', password)

    await prisma.$disconnect()
}

main().catch(console.error)