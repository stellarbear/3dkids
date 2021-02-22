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
        <div style={{
            ...style,
            margin: "auto",
            position: "absolute",
            cursor: "pointer",
            zIndex: 4,
            left: 0, right: 0,
            width: 100,
            height: 100,
        }}
            onClick={() => call(<YouTubeDialog src={link} />)}
        >
            <img style={{
                width: 100,
                height: 100,
                position: "absolute"
            }} src="images/play-outer.svg" alt="" />
            <img className="play-button" style={{
                top: 8, left: 11,
                width: 80,
                height: 80,
                position: "absolute"
            }} src="images/play.png" alt="" />
        </div>
    )
}