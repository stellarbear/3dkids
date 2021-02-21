import * as React from 'react';
import {useApp} from '../../App';

export const Mock: React.FC = () => {
    const {loaded} = useApp();

    return (
        <div style={{
            position: "absolute",
            left: 0, right: 0, top: 0, bottom: 0,
            background: "white",
            zIndex: loaded ? -9000 : 9000,
            opacity: loaded ? 0.0 : 1.0,
            transition: "all 0.5s"
        }}>
            <img
                style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                alt="logo icon"
                width={200} height={200}
                src={`/images/loader.gif`} />
        </div>
    )
}