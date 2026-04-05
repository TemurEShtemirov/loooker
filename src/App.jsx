import * as React from 'react'
import { useState } from 'react'
import GameBoard from './components/gameBoard'
import { getRandomPos, getRandomPaletteColor } from './utils/random'

function App() {
  const [shapes, setShapes] = useState([])
  const [currentSize, setCurrentSize] = useState(100)

  const spawnShape = () => {
    const newShape = {
      id: Date.now(),
      x: getRandomPos(),
      y: getRandomPos(),
      size: currentSize,
      color: getRandomPaletteColor()
    }
    setShapes([newShape])

    //INFO the "shrink" logic
    setCurrentSize(prev => Math.max(prev - 10, 15));
  }

  return (
    <>
      <div className="App">
        <h1 style={{ textAlign: "center" }}>Shape Looker: Phase 1</h1>
        <button onClick={spawnShape} style={{ display: "block", margin: "10px auto" }}>
          {shapes.length === 0 ? "Start Game" : "Spawn Next"}
        </button>
        <GameBoard shapes={shapes} onShapeClick={spawnShape} />
      </div>
    </>
  )
}

export default App