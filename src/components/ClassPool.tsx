import * as React from 'react';
import './ClassPool.css'

interface IProps {
    type: string | (string)[]
}

export const ClassPool: React.FC<IProps> = ({type, children}) => {
    const classes = Array.from(type).map(t => t).join("")
    return (
       <div className={classes}>
           {children}
       </div>
   )
}