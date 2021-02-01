import * as React from 'react';
import './Section.css'

interface IProps {
    top?: number
}

export const Section: React.FC<IProps> = ({ children, top = 60 }) => (
    <div className="conten-section">
        {children}
    </div>
)