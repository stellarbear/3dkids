import * as React from 'react';

interface IProps {
    src: string
    alt: string
    fullScreen?: boolean
    style?: React.CSSProperties
}

export const Image: React.FC<IProps> = ({ src, alt, style = {}, fullScreen = false }) => (
    <div>
        <picture>
            <source srcSet={`images/${src}.webp`} type="image/webp"/>
            <img style={
                fullScreen ? {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    ...style,
                }: style
            }
            height="inherit" src={`images/${src}.png`} alt={alt}/>
        </picture>
    </div>
)

//  <source srcSet={`images/${src}.webp`} type="image/webp"/>