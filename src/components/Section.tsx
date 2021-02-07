import * as React from 'react';
import './Section.css'

interface IProps {
    alt?: boolean
    style?: React.CSSProperties
}

export const Section: React.FC<IProps> = ({ children, style = {}, alt = false }) => (
    <div className={alt 
        ? "content-section content-section-alternative" 
        : "content-section content-section-default"} 
        style={style}>
        {children}
    </div>
)