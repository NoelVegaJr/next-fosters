import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import SessionProvider from '../context/SessionContext';
const queryClient = new QueryClient();


function MyApp({ Component, pageProps: { ...pageProps} }) {

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout> 
      </QueryClientProvider>
    </SessionProvider>



  )
}

export default MyApp
