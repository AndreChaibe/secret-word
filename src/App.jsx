import GameIntroduction from "./components/GameIntroduction";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
import words from "../src/assets/data/secret-words";
import { useState } from "react";
import "./global.css"

function App() {

  function randomSecretWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
  }

  const [activeTab, setActiveTab] = useState("introduction")
  const [userScore, setUserScore] = useState(0)
  const [wordSecret, setWordSecret] = useState(() => randomSecretWord())

  const score1 = {
    userScore,
    setUserScore
  }

  const resetGame = () => {
    setWordSecret(randomSecretWord())
    setUserScore(0)
    setActiveTab("introduction")
  }

  return (
    <div className="flex flex-col justify-center items-center text-white font-poppins min-h-screen gap-5 bg-[#0b0b2e65] bg-cover bg-center bg-no-repeat bg-fixed">
      {activeTab === "introduction" && (
        <GameIntroduction setActive={setActiveTab} />
      )}
      
      {activeTab === "game" && (
        <Game 
          currentWord={wordSecret} 
          setWord={setWordSecret}
          setActive={setActiveTab} 
          score={score1}
          randomWord={randomSecretWord}
        />
      )}
      
      {activeTab === "gameOver" && (
        <GameOver 
          currentWord={wordSecret}
          setActive={setActiveTab} 
          score={score1}
          onReset={resetGame}
        />
      )}
    </div>
  )
}

export default App;