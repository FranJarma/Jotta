import React from 'react'

const GuessedWord = ({word}) => {
    return (
        <>
            <li>
                <a href="#">{word.word} - <span>Matching Letters: {word.matchingLetters}</span></a>
            </li>
        </>
    )
}
export default GuessedWord;