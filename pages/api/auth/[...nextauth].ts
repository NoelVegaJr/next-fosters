import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../utils/auth';
import { PrismaClient } from '@prisma/client';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  password: string;
}

interface LoginSession {
  name: string;
  email: string;
  image: string;
}

const prisma = new PrismaClient();

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {},
      async authorize(credentials: { email: string; password: string }, req) {
        console.log(req);
        try {
          const user: User = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
            select: {
              id: true,
              firstName: true,
              lastName: true,
              avatar: true,
              email: true,
              password: true,
            },
          });
          if (!user) {
            throw new Error(`The user '${credentials.email}' was not found!`);
          }

          if (user.password !== credentials.password) {
            throw new Error(
              `Could not log '${credentials.email}' in! Invalid password!`
            );
          }

          const session: LoginSession = {
            name: user.id,
            email: user.email,
            image: user.avatar,
          };
          return { ...session };
        } catch (err) {
          console.log(err.message);
          return null;
        }
      },
    }),
  ],
});
