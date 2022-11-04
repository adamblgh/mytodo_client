import {Todo} from './components/Todo';
import './App.css';
import React from 'react';
import {MyHeader} from './components/MyHeader';
import {QueryClient, QueryClientProvider} from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  return (
      
    <QueryClientProvider client={queryClient}>
    
    <MyHeader isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    {isLoggedIn? <Todo/> : <h1 className='pt-5 text-center'>JELENTKEZZ BE A MEGTEKINTÉS ELŐTT!</h1>}
    </QueryClientProvider>
      
  );
}

export default App;