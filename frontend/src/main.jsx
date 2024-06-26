import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoContextProvider } from './context/TodoContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
