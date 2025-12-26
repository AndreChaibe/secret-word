
import { useState, useEffect, useMemo } from "react";
import words from "../assets/data/secret-words";

function WordSecret() {
    const word = words[Math.floor(Math.random() * words.length)];
    return word;
}

const Game = ({setActive, statelife}) => {
    const [wordSecret, setWordSecret] = useState(WordSecret())
    const [userLetter, setUserLetter] = useState("")
    const [lifes, setLifes] = useState(3)
    const [guessesLetter, setGuessesLetter] = useState([])

    const lettersWordSecret = useMemo(() => wordSecret.word.split(""), [wordSecret.word])

    const correctLetters = useMemo(() => 
        guessesLetter.filter(guesses => lettersWordSecret.includes(guesses)),
        [guessesLetter, lettersWordSecret]
    )
    
    const incorrectLetters = useMemo(() => 
        [...new Set(guessesLetter)].filter(letter => !wordSecret.word.includes(letter)),
        [guessesLetter, wordSecret.word]
    )

    useEffect(() => {
        if (lifes === 0) {
            setActive("gameOver");
        }
    }, [lifes, setActive]);

    useEffect(() => {
        const uniqueCorrect = new Set(correctLetters).size;
        const uniqueWord = new Set(lettersWordSecret).size;
        
        if (uniqueCorrect > 0 && uniqueCorrect === uniqueWord) {
            setGuessesLetter([]);
            statelife.setUserScore((prevScore) => prevScore + 100);
            setWordSecret(WordSecret());
        }
    }, [correctLetters, lettersWordSecret, statelife]);

    function handleUserLetter(event) {
        setUserLetter(event.target.value.toLocaleUpperCase())
    }

    function handleLossLife() {
        if(!wordSecret.word.includes(userLetter)) setLifes((prevLifes) => prevLifes - 1)
    }

    function handleGuess(event) {
        event.preventDefault();
        handleLossLife()
        
        if (userLetter) {
            setGuessesLetter([...guessesLetter, userLetter.toLocaleUpperCase()])
            setUserLetter("")
        }
    }

    function renderGuessesIncorrects() {
        if (incorrectLetters) {
           return incorrectLetters.map((letter, index) => {
             return <li className="bg-red-500 p-1.5" key={index}>{letter}</li>
           })
        }
    }

    function renderWordInputs() {
        return lettersWordSecret.map((letter, index) => {
            const showLetter = correctLetters.includes(letter.toLocaleUpperCase()) ? letter : "";

            return (
                <textarea
                    key={index}
                    maxLength={1}
                    value={showLetter}
                    readOnly 
                />
            )
        })
    }

    return (
        <div className="flex flex-col justify-center text-center items-center w-full text-2xl gap-7">
            <div className="flex flex-col text-center gap-3 text-[1.4rem] [&>p>span]:text-yellow-300">
                <h1 className="text-5xl font-bold mb-3">Adivinhe a Palavra</h1>
                <p>Dica sobre a palavra: <span>{wordSecret.tip}</span></p>
                <p>Você ainda tem <span>{lifes}</span> tentativa(s)</p>
                <p className="mb-4">Pontuação: <span>{statelife.userScore}</span></p>
            </div>
 
            <div className="flex justify-center text-center items-center border-10 border-yellow-300 p-5 
                          [&>textarea]:resize-none [&>textarea]:outline-none [&>textarea]:bg-white [&>textarea]:w-25 [&>textarea]:h-25 [&>textarea]:pt-2 [&>textarea]:border-4 [&>textarea]:border-black [&>textarea]:text-black [&>textarea]:text-[5rem] [&>textarea]:leading-none [&>textarea]:text-center [&>textarea]:overflow-hidden">
                {lettersWordSecret && renderWordInputs()}
            </div>

            <p>Tente adivinhar uma letra da palavra</p>
            <div className="flex justify-center items-center gap-6
                         [&>input]:text-black [&>input]:text-[2.5rem] [&>input]:leading-none [&>input]:text-center">

            <div onSubmit={handleGuess} className="flex gap-6 justify-center items-center text-black [&>input]:outline-none">
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
                    type="button"
                    value={"JOGAR!"}
                    onClick={handleGuess}
                    className="cursor-pointer border-4 border-white/95 font-bold text-2xl text-white py-3 px-4 bg-blue-600 rounded-3xl hover:bg-blue-700 transition-colors"
                />
            </div>

            </div>

            <div className="absolute bottom-10 right-10 flex flex-row gap-5 justify-end w-screen items-center">
              <p>Letras já utilizadas:</p>
              <ul className="flex gap-3">
                {incorrectLetters && renderGuessesIncorrects()}
              </ul>
            </div>
        </div>
    )
}

export default Game;