import * as React from 'react';
import { useModal } from './Modal';
import { YouTubeDialog } from './YoutubeDialog';
import './PlayButton.css'

interface IProps {
    link: string
    style?: React.CSSProperties
}

export const PlayButton: React.FC<IProps> = (props) => {
    const { link, style = {} } = props;
    const { call } = useModal();

    return (
        <div className="play-button" style={{
            ...style,
            width: 80,
            height: 80,
            margin: "auto",
            backgroundColor: "#FF2747",
            borderRadius: "50%",
            position: "relative",
            cursor: "pointer",
            marginBottom: -50
        }}
            onClick={() => call(<YouTubeDialog src={"https://www.youtube.com/embed/2GoexbWjJys"} />)}
        >
            <img style={{
                top: 11,
                left: 11,
                position: "absolute"
            }} src="images/play.png" alt="" />
        </div>
    )
}