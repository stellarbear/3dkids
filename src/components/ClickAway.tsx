import * as React from 'react';

interface IProps {
    opened: boolean
    onClick: () => void
}

export const ClickAway: React.FC<IProps> = (props) => {
    const { opened, onClick, children } = props;

    return (

        <div style={{
            position: "fixed",
            left: opened ? 0 : "50%",
            top: opened ? 0 : "50%",
            width: opened ? "100vw" : "0",
            height: opened ? "100vh" : "0",
            transition: "all 0.2s",
            zIndex: 5
        }} onClick={onClick}>
            {children}
        </div>
    )
}