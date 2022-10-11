import './App.css';
import {Tours} from './components/Tours'
import { QueryClient, QueryClientProvider} from 'react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       <Tours />
    </QueryClientProvider>
   
  );
}

export default App;
