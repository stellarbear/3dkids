import * as React from 'react';
import './Section.css'

interface IProps {
    top?: number
}

export const Section: React.FC<IProps> = ({ children, top = 60 }) => (
    <div className="content__section">
        {children}
    </div>
)