import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions = {
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
        // simple fallback: allow admin login via env vars
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: 'admin',
            name: 'Admin',
            email: process.env.ADMIN_USERNAME ?? 'admin',
          };
        }
        return null;
      },
    }),
    // ...add other providers (Google, GitHub) here if desired...
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };