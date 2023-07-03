import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Input } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <span className="text-3xl font-bold underline">
        Hello world!
      </span>
      <div className="App">
        <Input />
        <input />
        <Button type="primary">Button</Button>
      </div>
    </>
  )
}

export default App
