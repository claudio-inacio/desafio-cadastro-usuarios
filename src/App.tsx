import './App.css'
import { QueryProvider } from './app/providers/query-provider'
import { AppRouter } from './app/providers/router'
import { ToastContainer } from 'react-toastify';

function App() {
 
  return (
    <QueryProvider>
      <AppRouter />      
      <ToastContainer />
    </QueryProvider>
  )
}

export default App
