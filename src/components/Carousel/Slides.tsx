import * as React from "react";
import { Row } from "../Flex";

interface IProps {
    slide: number;
    content: React.ReactNode[];
    style?: React.CSSProperties;
    onLeft: () => void;
    onRight: () => void;
    noTouch?: boolean
}

export const Slides: React.FC<IProps> = (props) => {
    const {content, slide, onLeft, onRight, noTouch = false, style = {}} = props;

    const [touchX, setTouchX] = React.useState(0);
    const [moveX, setMoveX] = React.useState(0);

    const onMove = () => {
        if (touchX !== 0 && moveX !== 0) {
            if (moveX > touchX) {
                onLeft();
            } else {
                onRight();
            }
        }
        setTouchX(0);
        setMoveX(0);
    };

    const slideShift = `translateX(${-slide * 100}%)`;
    const touchShift = `translateX(${(moveX ?? 0) - (touchX ?? 0)}px)`;
    const isTouching = !noTouch && moveX && touchX;

    return (
        <Row style={{
            ...style,
            transition: "all 0.1s",
            transform: isTouching
                ? `${slideShift} ${touchShift}`
                : `${slideShift}`,
        }}>
            {
                React.Children.map(content, (child, index) => (
                    <div
                        key={index}
                        style={{
                            width: "100%",
                            height: "fit-content",
                            flexShrink: 0,
                        }}
                        onTouchStart={(e) => setTouchX(e.touches?.[0]?.clientX ?? 0)}
                        onTouchMove={(e) => setMoveX(e.touches?.[0]?.clientX ?? 0)}
                        onTouchEnd={() => !noTouch && onMove()}
                    >
                        {child}
                    </div>
                ))
            }
        </Row>
    );
};