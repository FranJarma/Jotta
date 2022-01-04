import * as React from 'react';

interface CongratsProps {
    color: string,
    message: string
}

const Congrats: React.FunctionComponent <CongratsProps> = ({color, message}) => (
    <div style={{color: color}}>{message}</div>
)

export default Congrats;