import * as React from 'react';

interface ISize {
    width: number
    height: number
}

export const useWindowSize = () : [ISize, (u: ISize) => void] => {
    const [windowSize, setWindowSize] = React.useState<ISize>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return [windowSize, setWindowSize];
}