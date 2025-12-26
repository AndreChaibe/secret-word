const GameIntroduction = ({setActive}) => {
    
    return (
        <div className="flex flex-col justify-center items-center text-white">
            <h1 style={{textShadow: "1px 4px 7px #242526EB"}} className="text-[6.6rem] font-semibold mb-5">Secret <span className="bg-amber-300 text-[#FAFCFD] px-5 rounded-3xl">Word</span></h1>
            <p className="text-2xl font-semibold">Clique no botão abaixo para jogar</p>

            <button onClick={() => setActive("game")} className="cursor-pointer border-3 border-white/75 font-semibold text-2xl mt-6 py-3 px-4 bg-[#3574C8] tracking-[0.2rem] rounded-4xl">COMEÇAR JOGO</button>
        </div>
    )
}

export default GameIntroduction; 