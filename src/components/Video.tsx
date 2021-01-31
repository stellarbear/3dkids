import * as React from 'react';

interface IProps {
    src: string
    fullScreen?: boolean
}

export const Video: React.FC<IProps> = ({ src, fullScreen = false }) => (
    <video
        style={fullScreen ? {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }: {}}
        loop={true} muted={true} autoPlay={true} preload="metadata">
        <source src={`videos/${src}.mp4`} type="video/mp4" />
        <source src={`videos/${src}.webm`} type="video/webm" />
    </video>
)