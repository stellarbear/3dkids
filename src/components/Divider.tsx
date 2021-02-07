import * as React from 'react';
import './Divider.css';

interface IProps {
    style?: React.CSSProperties
}

export const Divider: React.FC<IProps> = ({style= {}}) => (
    <div className="divider" style={style}/>
)