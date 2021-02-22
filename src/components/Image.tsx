import * as React from 'react';

interface IProps {
    src: string
    alt: string
    responsive?: boolean
    fullScreen?: boolean
    style?: React.CSSProperties
}

export const Image: React.FC<IProps> = ({ src, alt, style = {}, fullScreen = false, responsive = false }) => {
    const [height] = React.useState(window.innerHeight)
    return (
        <div>
            <picture>
                {responsive && (
                    <source 
                        srcSet={`images/${src}-mob.webp`} 
                        media={`(max-width: 400px)`}
                        type="image/webp"/>
                )}
                <source 
                    srcSet={`images/${src}.webp`} 
                    type="image/webp"/>
                {responsive && (
                    <source 
                        srcSet={`images/${src}-mob.png`} 
                        media={`(max-width: 400px)`}/>
                )}
                <source 
                    srcSet={`images/${src}.png`} />
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