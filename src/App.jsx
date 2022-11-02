import {Todo} from './components/Todo';
import './App.css';
import {MyHeader} from './components/MyHeader';
import {QueryClient, QueryClientProvider} from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

function App() {
  return (
      
    <QueryClientProvider client={queryClient}>
    
    <MyHeader />
    <Todo/>
    </QueryClientProvider>
      
  );
}

export default App;