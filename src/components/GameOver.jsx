const GameOver = ({ currentWord, setActive, score, onReset }) => {

    const handlePlayAgain = () => {
        score.setUserScore(0);
        onReset();
        setActive("game");
    };

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-8xl font-bold mb-5 w-screen">Game Over</h1>

            <div className="text-[2rem] mb-8 bg-black/40 py-5 px-9 rounded-2xl max-[485px]:text-[1.5rem]">
                <p>A palavra era: <span className="text-yellow-300 font-semibold">{currentWord.word}</span></p>
                <p className="">
                    Sua pontuação foi: <span className="text-yellow-300 font-bold">{score.userScore}</span>
                </p>
            </div>

            <button
                onClick={handlePlayAgain}
                className="cursor-pointer text-2xl bg-[#1565ce] hover:bg-[#1565ce]/80 p-4 border-4 rounded-2xl font-semibold transition-colors"
            >
                Jogar de novo
            </button>
        </div>
    );
};

export default GameOver;