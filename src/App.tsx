import './App.css'
import { QueryProvider } from './app/providers/query-provider'
import { AppRouter } from './app/providers/router'

function App() {

  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  )
}

export default App
