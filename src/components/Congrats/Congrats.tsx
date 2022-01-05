import React, { useState } from 'react'

interface CongratsProps {
    success: boolean
}

const Congrats = (props: CongratsProps): JSX.Element => {

    const [ alert, setAlert ] = useState<boolean>(false);

    if(props.success) {
        return (
            <>
            </>
        )
    }
    else {
        return (
            <></>
        )
    }
    
}

export default Congrats;


