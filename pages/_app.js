import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
      
        <Layout>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false}/> */}
        </Layout>
        
      </SessionProvider>
      
    </QueryClientProvider>
    
    
    </>


  )
}

export default MyApp
