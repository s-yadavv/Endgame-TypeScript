/*
FINAL CHALLENGE! Fully type the Keyboard component
1. Type the return value of Keyboard
2. Type the props 
3. Explictly type all variables inside of Keyboard
*/
import type {JSX} from 'react'

import { clsx } from "clsx"
type KeyBoardProps = {
    alphabet : string,
    guessedLetters : string[],
    currentWord : string,
    isGameOver : boolean,
    addGuessedLetter : string
}

export default function Keyboard({
                                     alphabet,
                                     guessedLetters,
                                     currentWord,
                                     isGameOver,
                                     addGuessedLetter
                                 }: KeyBoardProps) : JSX.Element {
    const keyboardElements = alphabet.split("").map(letter => {
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                aria-disabled={isGuessed}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}