import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
          {/* <ReactQueryDevtools initialIsOpen={false}/> */}
        </Layout> 
    </QueryClientProvider>
    
    
    </>


  )
}

export default MyApp
