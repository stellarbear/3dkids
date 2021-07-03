import * as React from 'react';
import "./Image.css"

interface IProps {
    src: string
    alt: string
    responsive?: boolean
    className?: string
    fullScreen?: boolean
    style?: React.CSSProperties
}

const threshold = 425;

export const Image: React.FC<IProps> = (props) => {
    const { src, alt, style = {}, fullScreen = false, className, responsive = false } = props;

    return (
        <div className={className}>
            <picture>
                {responsive && (
                    <source 
                        srcSet={`images/${src}-mob.webp`} 
                        media={`(max-width: ${threshold}px)`}
                        type="image/webp"/>
                )}
                <source 
                    srcSet={`images/${src}.webp`} 
                    type="image/webp"/>
                {responsive && (
                    <source 
                        srcSet={`images/${src}-mob.png`} 
                        media={`(max-width: ${threshold}px)`}/>
                )}
                <source 
                    srcSet={`images/${src}.png`} />
                <img style={
                    fullScreen ? {
                        position: "absolute",
                        width: "100%",
                        height: `100%`,
                        objectFit: "cover",
                        objectPosition: "top",
                        ...style,
                    }: style}
                    height="inherit" src={`images/${src}.png`} alt={alt}/>
            </picture>
        </div>
    )
}