import * as React from 'react';

interface IProps {
    src: string
    alt: string
    fullScreen?: boolean
    style?: React.CSSProperties
}

export const Image: React.FC<IProps> = ({ src, alt, style = {}, fullScreen = false }) => {
    const [height] = React.useState(window.innerHeight)
    return (
        <div>
            <picture>
                <source srcSet={`images/${src}.webp`} type="image/webp"/>
                <img style={
                    fullScreen ? {
                        position: "absolute",
                        width: "100%",
                        height: `${height}px`,
                        objectFit: "cover",
                        ...style,
                    }: style
                }
                height="inherit" src={`images/${src}.png`} alt={alt}/>
            </picture>
        </div>
    )
}

//  <source srcSet={`images/${src}.webp`} type="image/webp"/>