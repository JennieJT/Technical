import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RemoveDuplicates from './Leetcode/RemoveDuplicates';
import UniqueOccur from './Leetcode/UniqueOccur'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <UniqueOccur />
        <RemoveDuplicates arr = {[1,1,1,2,2,2,3,6]} />
      </div>
    </>
  )
}

export default App
