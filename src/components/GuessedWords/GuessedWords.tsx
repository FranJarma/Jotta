import React from 'react'
import GuessedWord from '../GuessedWord/GuessedWord';

const words = [
    {
        word: "Bla",
        matchingLetters: 1
    },
    {
        word: "Bla",
        matchingLetters: 2
    },
    {
        word: "Bla",
        matchingLetters: 1
    },
    {
        word: "Bla",
        matchingLetters: 0
    },
    {
        word: "Bla",
        matchingLetters: 3
    }
];

const GuessedWords = (): JSX.Element => {
    return (
        <div className='list'>
            <ol>
                <li>
                    <p>Words - Matching letters</p>
                        {words.map((word)=>(
                            <GuessedWord word={word}/>
                        ))}
                </li>
            </ol>
        </div>
    )
}
export default GuessedWords;