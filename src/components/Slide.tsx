import * as React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

export const Slide: React.FC = (props) => {
    const { children } = props;
    const [windowSize] = useWindowSize();

    return (
        <div style={{
            transition: "all 0.3s",
            position: "relative",
            height: `${windowSize.height}px`,
        }}>
            {children}
        </div>
    )
}