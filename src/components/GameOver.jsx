const GameOver = ({setActive, statelife}) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-bold mb-5">Game Over</h1>
             <p className="text-[2.4rem]">Sua pontuação foi: <span className="text-yellow-300">{statelife.userScore}</span></p>
             <p className="text-[1.5rem] mb-10 mt-4">Clique no botão abaixo para jogar novamente</p>

             <button onClick={() => { setActive("game") , statelife.setUserScore(0)}} className="cursor-pointer text-2xl bg-blue-600 p-4 border-2 rounded-2xl">Jogar de novo</button>
        </div>
    )
}

export default GameOver