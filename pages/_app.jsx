import '@/styles/globals.css';
import 'antd/dist/reset.css';
import { AuthProvider } from '@/contexts/AuthContext.jsx';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
