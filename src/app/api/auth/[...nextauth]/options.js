import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { toast } from 'react-toastify';

import { baseUrl } from '../../../../utils/request';
import { request } from '../../../../utils/request';

const credentialsProviderOptions = {
  name: 'Login',
  credentials: {
    email: {
      label: 'Email Address',
      type: 'email',
      placeholder: 'john2gmail.com',
    },
    password: { label: 'Password', type: 'password', placeholder: 'Password' },
  },
  authorize: async (credentials) => {
    if (credentials?.email === '' || credentials?.password === '') {
      return null;
    }

    const { email, password } = credentials || { email: 'example@gmail.com' };
    try {
      const json = await request('POST', `${baseUrl}/login`, {
        data: { email, password },
      });

      if (json.status && json.data && json.data.token) {
        const user = {
          data: {
            token: json.data.token,
          },
          id: '',
        };
        return user;
      }
    } catch (err) {
      toast.error('Invalid email or password');
      return null;
    }
    toast.error('Invalid email or password');
    return null;
  },
};

export const authOptions = {
  providers: [CredentialsProvider(credentialsProviderOptions)],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.access = user.data.token;
      }
      await Promise.resolve();
      return token;
    },
    async session({ session, token }) {
      session.token = token.access;
      await Promise.resolve();
      return session;
    },
  },

  pages: {
    signIn: '/login',
  },
};

export function auth(...args) {
  return getServerSession(...args, authOptions);
}
