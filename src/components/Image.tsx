import * as React from 'react';

interface IProps {
    src: string
    alt: string
    fullScreen?: boolean
    style?: React.CSSProperties
}

export const Image: React.FC<IProps> = ({ src, alt, style = {}, fullScreen = false }) => (
    <img
        style={fullScreen ? {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            ...style,
        }: style}
        alt={alt} src={`images/${src}.png`} />
)