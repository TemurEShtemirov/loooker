import { useState } from 'react'
import GameBoard from './components/gameBoard'
import Timer from './components/timer'
import LiquidFilter from './assets/svg/liquidFilter'
import { getRandomPos, getRandomPaletteColor } from './utils/random'
import { useGameLogic } from './hooks/useGameLogic'

function App() {
  const [shapes, setShapes] = useState([])
  const [currentSize, setCurrentSize] = useState(100)

  // Pulling everything from your custom hook
  const { timeLeft, isGameOver, addTime, restartGame, score, isActive, startGame } = useGameLogic();

  const handleHit = () => {
    if (isGameOver) return;

    // 1. If the game isn't active yet, start the timer on first click
    if (!isActive) {
      startGame();
    }

    // 2. Shrink Logic: Decrease size by 10px, but don't go below 15px
    const nextSize = Math.max(currentSize - 10, 15);
    setCurrentSize(nextSize);

    // 3. Create the next target
    const newShape = {
      id: Date.now(),
      x: getRandomPos(),
      y: getRandomPos(),
      size: nextSize,
      color: getRandomPaletteColor()
    }

    // 4. Reward the player
    addTime(); // Refills the timer bucket (max 5s) and adds +1 score
    setShapes([newShape]);
  };

  const handleRestart = () => {
    setCurrentSize(100);
    setShapes([]);
    restartGame();
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center font-sans">
      {/* The "Invisible Engine" for liquid merging */}
      <LiquidFilter />

      {isGameOver ? (
        // --- GAME OVER SCREEN ---
        <div className="flex flex-col items-center z-50 animate-in fade-in zoom-in duration-300">
          <h1 className="text-white text-6xl font-black mb-2 drop-shadow-2xl">OUT OF TIME</h1>
          <p className="text-white/60 text-xl mb-8">Final Score: <span className="text-cyan-400">{score}</span></p>
          <button
            onClick={handleRestart}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-transform"
          >
            TRY AGAIN
          </button>
        </div>
      ) : (
        // --- ACTIVE GAME SCENE ---
        <>
          {shapes.length === 0 ? (
            // START SCREEN
            <button
              onClick={handleHit}
              className="start-btn px-12 py-6 bg-cyan-500 text-white text-2xl font-black rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:bg-cyan-400 transition-all"
            >
              START GAME
            </button>
          ) : (
            // PLAYING HUD & BOARD
            <>
              <div className="game-hud fixed top-10 left-0 w-full px-10 flex flex-col items-center gap-4 z-50 pointer-events-none">
                <Timer time={timeLeft} />
                <div className="score-display text-white/50 text-sm font-mono tracking-widest uppercase">
                  Current Score: <span className="text-white font-bold text-lg">{score}</span>
                </div>
              </div>

              <div className="w-full h-full absolute inset-0">
                <GameBoard shapes={shapes} onShapeClick={handleHit} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default App;