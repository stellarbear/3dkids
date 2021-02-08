import * as React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import './Video.css'

interface IProps {
    src: string
    fullScreen?: boolean
}

export const Video: React.FC<IProps> = ({ src, fullScreen = false }) => {
    const [size] = useWindowSize();
    const [height, setHeight] = React.useState(size.height);
    const ref = React.useRef<(HTMLDivElement | null)>(null);

    React.useEffect(() => {
        if (ref.current) {
            const windowHeight = size.height;
            const bottomHeight = ref.current.parentElement?.lastElementChild?.clientHeight ?? 0;
            setHeight(windowHeight - bottomHeight);
        }
    }, [size.width, size.height, ref])
    
    return (
        <>
            <video
                style={fullScreen ? {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }: {}}
                loop={true} muted={true} autoPlay={true} preload="metadata">
                <source src={`videos/${src}_blur.webm`} type="video/webm" />
                <source src={`videos/${src}_blur.mp4`} type="video/mp4" />
            </video>
            <div ref={ref}
                style={{
                    height,
                    width: "100%",
                    position: "relative"
                }}>
                <div 
                    style={{
                        position: "absolute",
                        top: "18%",
                        right: "10%",
                        width: "80%",
                        height: "75%",
                    }}>
                        <video
                            style={fullScreen ? {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }: {}}
                            loop={true} muted={true} autoPlay={true} preload="metadata">
                            <source src={`videos/${src}.webm`} type="video/webm" />
                            <source src={`videos/${src}.mp4`} type="video/mp4" />
                        </video>
                        <div className="test"/>
                </div>
            </div>
        </>
    )
}


/*

*/