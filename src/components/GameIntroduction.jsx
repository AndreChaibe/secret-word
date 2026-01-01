// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const GameIntroduction = ({ setActive }) => {

    return (
        <>
            <motion.div className="flex flex-col flex-1 justify-center items-center text-white">

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ textShadow: "1px 4px 7px #242526EB" }}
                    className="text-[6.6rem] font-semibold mb-5 w-screen text-center">
                    Secret <motion.span initial={{ opacity: 0, top: -50 }} animate={{ opacity: 1, top: 0 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }} className="bg-[#ece645] text-[#FAFCFD] px-5 rounded-3xl relative">Word</motion.span>
                </motion.h1>


                <p className="text-2xl text-center font-semibold max-[420px]:w-[20rem]">Clique no botão abaixo para jogar</p>
                <button onClick={() => setActive("game")} className="cursor-pointer border-3 border-white/75 font-semibold text-2xl mt-6 py-2.5 px-4 bg-[#3574C8] hover:bg-[#3574C8]/50 transition-colors cking-[0.1rem] rounded-4xl">COMEÇAR JOGO</button>

            </motion.div>

            <footer className="text-[1.2rem] text-center relative  w-screen bg-black/50 p-4">
                <p>Desenvolvido por: <a href="https://www.linkedin.com/in/andre-chaibe/" target="_blank" className="text-yellow-300 font-semibold hover:underline">André Chaibe</a></p>
            </footer>
        </>
    )
}

export default GameIntroduction; 