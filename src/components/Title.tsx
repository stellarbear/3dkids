import * as React from 'react';
import './Title.css'

interface IProps {
    alt?: boolean
    style?: React.CSSProperties
}

export const Title: React.FC<IProps> = ({ children, style = {}, alt = false }) => (
    <div style={style} className={alt 
        ? "content-title content-title-alt"
        : "content-title content-title-base"}>
        {children}
    </div>
)