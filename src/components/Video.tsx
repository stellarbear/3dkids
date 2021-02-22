import * as React from 'react';
import {useApp} from '../App';
import {useWindowSize} from '../hooks/useWindowSize';
import './Video.css'

interface IProps {
    src: string
    logo?: boolean
    fullScreen?: boolean
}

const autoplay = true;
const delta = 112;

export const Video: React.FC<IProps> = ({src, fullScreen = false, logo = false}) => {
    const {loaded} = useApp();
    const [size] = useWindowSize();
    const [windowSize] = useWindowSize();
    const [height, setHeight] = React.useState(size.height);
    const ref = React.useRef<(HTMLDivElement | null)>(null);

    React.useEffect(() => {
        if (ref.current) {
            const windowHeight = size.height;
            const bottomHeight = ref.current.parentElement?.lastElementChild?.clientHeight ?? 0;
            setHeight(windowHeight - bottomHeight);
        }
    }, [ref, windowSize.height, windowSize.width, loaded])

    return (
        <>
            <video
                style={fullScreen ? {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                } : {}}
                loop={true} muted={true} autoPlay={autoplay} preload="metadata">
                <source src={`videos/${src}_blur.webm`} type="video/webm" />
                <source src={`videos/${src}_blur.mp4`} type="video/mp4" />
            </video>
            <div ref={ref}
                style={{
                    height: height + delta,
                    width: "100%",
                    zIndex: 3,
                    position: "relative"
                }}>
                {logo && (
                    <img
                        src="images/logo.png"
                        style={{
                            position: "absolute",
                            zIndex: 4,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            margin: "auto",
                            maxWidth: "100%",
                            maxHeight: "60%",
                        }}
                    />
                )}
                <div
                    style={{
                        position: "absolute",
                        ...((size.width < 768) ? {
                            top: "5%",
                            right: "5%",
                            width: "90%",
                            height: "90%",
                        } : {
                                top: "12%",
                                right: "10%",
                                width: "80%",
                                height: "84%",
                            })
                    }}>
                    <video
                        style={fullScreen ? {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        } : {}}
                        loop={true} muted={true} autoPlay={autoplay} preload="metadata">
                        <source src={`videos/${src}.webm`} type="video/webm" />
                        <source src={`videos/${src}.mp4`} type="video/mp4" />
                    </video>
                    <div className="test" />
                </div>
            </div>
        </>
    )
}


/*

*/