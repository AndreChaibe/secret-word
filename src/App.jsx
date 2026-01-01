import GameIntroduction from "./components/GameIntroduction";
import Game from "./components/Game";
import GameOver from "./components/GameOver";  
import { useState } from "react";
import "./global.css"

function App() {

  const [activeTab, setActiveTab] = useState("introduction")
  const [userScore, setUserScore] = useState(0)

  const score = {
    userScore,
    setUserScore
  }

  return (
    <div className="flex flex-col justify-center items-center text-white font-poppins min-h-screen gap-5 bg-[#0b0b2e65] bg-cover bg-center bg-no-repeat bg-fixed">
      {activeTab === "introduction" && <GameIntroduction setActive={setActiveTab} />}
      {activeTab === "game" && <Game setActive={setActiveTab} statelife={score} />}
      {activeTab === "gameOver" && <GameOver setActive={setActiveTab} statelife={score} />}
    </div>
  )
}

export default App;