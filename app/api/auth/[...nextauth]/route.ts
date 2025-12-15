import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../../lib/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const adminUser = {
          name: 'Admin',
          email: process.env.ADMIN_USERNAME ?? 'admin',
        };
        // simple fallback: allow admin login via env vars
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          // upsert user in DB
          const user = await prisma.user.upsert({
            where: { email: adminUser.email },
            update: {},
            create: { name: adminUser.name, email: adminUser.email },
          });
          return user;
        }
        return null;
      },
    }),
    // ...add other providers (Google, GitHub) here if desired...
  ],
  session: {
    strategy: 'database',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };