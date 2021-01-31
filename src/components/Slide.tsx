import * as React from 'react';

export const Slide: React.FC = (props) => {
    const { children } = props;

    return (
        <div style={{
            position: "relative",
            height: "100vh",
        }}>
            {children}
        </div>
    )
}