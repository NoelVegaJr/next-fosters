import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '../../../utils/db';
import { verifyPassword } from '../../../utils/auth';

export default NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await connectDB();
        let user = await client.db().collection('users').findOne({email: credentials.email})

        if(!user) {
          client.close();
          throw new Error(`The user '${credentials.email}' was not found!`);
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if(!isValid) {
          client.close();
          throw new Error(`Could not log '${credentials.email}' in! Invalid password!`);
        }
        user =  await client.db().collection('users').findOne({email: credentials.email})
        client.close();
        console.log(user)
        return {name: user.username, email: user.email}
      }
    })
  ]
})