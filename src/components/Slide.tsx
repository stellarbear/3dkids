import * as React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

export const Slide: React.FC = (props) => {
    const { children } = props;
    const [windowSize] = useWindowSize();

    return (
        <div style={{
            position: "relative",
            height: `${windowSize.height}px`,
        }}>
            {children}
        </div>
    )
}