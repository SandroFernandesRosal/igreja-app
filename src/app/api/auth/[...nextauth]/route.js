import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

export const nextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        login: { label: 'login', type: 'text', placeholder: 'email@gmail.com' },
        password: { label: 'senha', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:3333/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: credentials?.login,
            password: credentials?.password,
          }),
        })

        const user = await res.json()

        if (user && res.ok) {
          return user
        }
        console.log(user)
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },

  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user
      return session
    },
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
