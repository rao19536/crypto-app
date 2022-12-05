import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import CryptoContainer from './Containers/CryptoContainer';

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptoContainer />
    </QueryClientProvider>
  );
}

export default App;
