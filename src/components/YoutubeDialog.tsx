import * as React from 'react';

interface IProps {
    src: string
}

export const YouTubeDialog: React.FC<IProps> = (props) => {
    const { src } = props;

    return (
        <iframe
            style={{
                maxWidth: 600,
                maxHeight: 400,
                border: "2px solid #FFFFFF",
                borderRadius: 5,
            }}
            className="optanon-category-3" frameBorder="0"
            allowFullScreen={true} allow="encrypted-media" title="YouTube video player" width="100%"
            height="100%" src={src}></iframe>
    )
}