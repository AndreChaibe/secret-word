const GameOver = ({setActive, statelife}) => {
    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-8xl font-bold mb-5 w-screen">Game Over</h1>

             <p className="text-[2rem] mb-8 bg-black/40 py-2 px-6 rounded-2xl max-[485px]:text-[1.5rem]">Sua pontuação foi: <span className="text-yellow-300 font-bold">{statelife.userScore}</span></p>

             <button onClick={() => { setActive("game") , statelife.setUserScore(0)}} className="cursor-pointer text-2xl bg-[#1565ce] hover:bg-[#1565ce]/80 p-4 border-4 rounded-2xl font-semibold">Jogar de novo</button>
        </div>
    )
}

export default GameOver