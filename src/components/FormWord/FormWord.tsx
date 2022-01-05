import React from 'react'

const FormWord = () => {
    return (
        <div className='container'>
            <form>
                <label htmlFor='word'>Enter your word here: </label>
                <input id="word">
                </input>
                <button>Guess!</button>
            </form>
        </div>
    )
};

export default FormWord;