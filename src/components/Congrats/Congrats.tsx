import React, { useState } from 'react'

interface CongratsProps {
    success: boolean
}

const Congrats = (): JSX.Element => {

    const [ alert, setAlert ] = useState<boolean>(false);

    return (
        <>
        <div className="alert-success">
            Congratulations! You won
        </div>
        </>
    )
    
}

export default Congrats;


