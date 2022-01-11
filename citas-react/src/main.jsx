import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render( //se inyecta un componente en el componente App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
