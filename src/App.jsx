import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Form/>
    </div>
  )
}

export default App
