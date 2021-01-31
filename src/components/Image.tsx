import * as React from 'react';

interface IProps {
    src: string
    alt: string
    fullScreen?: boolean
}

export const Image: React.FC<IProps> = ({ src, alt, fullScreen = false }) => (
    <img
        style={fullScreen ? {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }: {}}
        alt={alt} src={`images/${src}.png`} />
)