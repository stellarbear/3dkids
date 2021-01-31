import * as React from 'react';
import './MenuButton.css'

interface IProps {
    onClick: () => void
    opened: boolean
}

export const MenuButton: React.FC<IProps> = (props) => {
    const { onClick, opened } = props;

    return (
        <div className={opened ? `menu-button menu-button-active` : `menu-button`} onClick={onClick}>
            <div className="menu-button__line menu-button__line--top"></div>
            <div className="menu-button__line menu-button__line--middle"></div>
            <div className="menu-button__line menu-button__line--bottom"></div>
        </div>
    )
}