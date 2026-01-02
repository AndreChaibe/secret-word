import { useState, useEffect, useMemo } from "react";
import words from "../assets/data/secret-words";

// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

function WordSecret() {
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
}

const Game = ({ setActive, statelife }) => {
    const [wordSecret, setWordSecret] = useState(WordSecret())
    const [userLetter, setUserLetter] = useState("")
    const [lifes, setLifes] = useState(3)
    const [guessesLetter, setGuessesLetter] = useState([])

    const lettersWordSecret = useMemo(() =>
        wordSecret.word.split(""),
        [wordSecret.word]
    )

    const correctLetters = useMemo(() =>
        guessesLetter.filter(guesses => lettersWordSecret.includes(guesses)),
        [guessesLetter, lettersWordSecret]
    )

    const incorrectLetters = useMemo(() =>
        [...new Set(guessesLetter)].filter(letter => !wordSecret.word.includes(letter)),
        [guessesLetter, wordSecret.word]
    )

    const hasWon = useMemo(() => {
        const uniqueCorrect = new Set(correctLetters).size;
        const uniqueWord = new Set(lettersWordSecret).size;
        return uniqueCorrect > 0 && uniqueCorrect === uniqueWord;
    }, [correctLetters, lettersWordSecret]);


    useEffect(() => {
        if (lifes === 0) {
            setActive("gameOver");
        }
    }, [lifes, setActive]);

    useEffect(() => {
        if (hasWon) {
            setGuessesLetter([]);
            statelife.setUserScore((prevScore) => prevScore + 100);
            setWordSecret(WordSecret());
        }
    }, [hasWon, statelife]);

    function handleUserLetter(event) {
        const value = event.target.value.toLocaleUpperCase()
        setUserLetter(value.slice(0, 1))
    }

    function handleLossLife() {
        if (!wordSecret.word.includes(userLetter)) {
            setLifes((prevLifes) => prevLifes - 1)
        }
    }

    function handleGuess(event) {
        event.preventDefault();

        if (userLetter) {
            if (!guessesLetter.includes(userLetter.toLocaleUpperCase())) {
                handleLossLife()
                setGuessesLetter([...guessesLetter, userLetter.toLocaleUpperCase()])
            }
            setUserLetter("")
        }
    }

    function renderGuessesIncorrects() {
        if (incorrectLetters.length > 0) {
            return incorrectLetters.map((letter, index) => {
                return <li className="bg-red-500 p-1.5 rounded-lg" key={index}>{letter}</li>
            })
        }
        return null;
    }

    function renderWordInputs() {
        return lettersWordSecret.map((letter, index) => {
            const showLetter = correctLetters.includes(letter.toLocaleUpperCase()) ? letter : "";

            return (
                <motion.textarea
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}

                    key={index}
                    maxLength={1}
                    value={showLetter}
                    readOnly
                />
            )
        })
    }

    return (
        <div className="flex flex-col justify-center text-center items-center w-full text-2xl gap-10 max-[593px]:gap-7">
            <div className="flex flex-col text-center gap-3 text-[1.4rem]">

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-semibold mb-3 max-[593px]:text-4xl">Adivinhe a Palavra</motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-black/30 rounded-2xl p-4 [&>p>span]:text-yellow-300 [&>p>span]:font-semibold max-[380px]:text-[1.2rem]">
                    <p>Dica sobre a palavra: <span>{wordSecret.tip}</span></p>
                    <p>Você ainda tem <span>{lifes}</span> tentativa(s)</p>
                    <p>Pontuação: <span>{statelife.userScore}</span></p>
                </motion.div>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center text-center items-center bg-black/30 border-9 border-yellow-300 p-5 flex-wrap
                          [&>textarea]:resize-none [&>textarea]:outline-none [&>textarea]:bg-white [&>textarea]:w-28 [&>textarea]:h-28 [&>textarea]:pt-2 [&>textarea]:border-4 [&>textarea]:border-black [&>textarea]:text-black [&>textarea]:text-[5rem] [&>textarea]:leading-none [&>textarea]:text-center [&>textarea]:overflow-hidden
                          
                          max-[910px]:[&>textarea]:w-23 max-[910px]:[&>textarea]:h-23 max-[910px]:[&>textarea]:text-[4rem] max-[770px]:[&>textarea]:w-20 max-[770px]:[&>textarea]:h-20 max-[770px]:border-5 max-[770px]:p-3  max-[770px]:[&>textarea]:text-[3.5rem]">
                {lettersWordSecret && renderWordInputs()}
            </motion.div>

            <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-black/40 py-2 px-6 rounded-2xl max-[380px]:text-[1.2rem]">Tente adivinhar uma letra da palavra</motion.p>

            <div className="flex justify-center items-center gap-6
                         [&>input]:text-black [&>input]:text-[2.5rem] [&>input]:leading-none [&>input]:text-center">

                <form onSubmit={handleGuess} className="flex gap-6 justify-center items-center text-black [&>input]:outline-none">
                    <input
                        onChange={handleUserLetter}
                        className="bg-white w-16 h-16 text-4xl leading-none text-center border-2 border-black rounded-lg outline-none"
                        type="text"
                        value={userLetter}
                        pattern="[A-Za-zÀ-ÿ\s]+"
                        maxLength={1}
                        name="userLetter"
                        required
                    />
                    <input
                        type="submit"
                        value={"JOGAR!"}
                        className="cursor-pointer border-4 border-white/95 font-bold text-2xl text-white py-3 px-4 bg-blue-600 rounded-3xl hover:bg-blue-700 transition-colors"
                    />
                </form>

            </div>

            <div className="absolute bottom-10 right-10 flex flex-row gap-5 justify-end items-center
                            max-[1047px]:static max-[380px]:text-[1.2rem]">
                <p className="bg-black/35 py-2 px-5 rounded-2xl">Letras já utilizadas:</p>
                <ul className="flex gap-3">
                    {renderGuessesIncorrects()}
                </ul>
            </div>
        </div>
    )
}

export default Game;