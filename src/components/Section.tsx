import * as React from 'react';
import './Section.css'

interface IProps {
    alt?: number
    style?: React.CSSProperties
}

export const Section: React.FC<IProps> = ({ children, style = {}, alt }) => (
    <div className={alt 
        ? `content-section content-section-alternative-${alt}` 
        : "content-section content-section-default"} 
        style={style}>
        {children}
    </div>
)