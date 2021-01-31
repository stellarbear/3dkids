import * as React from 'react';
import './Label.css'

interface IProps {
    style?: React.CSSProperties
}

export const Label: React.FC<IProps> = ({ children, style = {} }) => (
    <div className="content__label" style={style}>
        {children}
    </div>
)