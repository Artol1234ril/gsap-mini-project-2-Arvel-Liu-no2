import { useState } from 'react'
import './App.css'
import Intro from './component.jsx/intro'
import Card from './component.jsx/card'
import Vertical from './component.jsx/verticalslide'
import Stats from './component.jsx/count'
import Rotatecard from './component.jsx/rotatecard'
import Center from './component.jsx/center'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Intro />
    <Card />
    <Vertical />
    <Stats />
    <Rotatecard />
    <Center />
    </>
  )
}

export default App
