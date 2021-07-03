import * as React from "react";
import { Button } from "../Button";
import { Col, Row } from "../Flex";
import { Slides } from "./Slides";
import './Carousel.css'
import { useWindowSize } from "../../hooks/useWindowSize";

interface IProps {
    top?: React.ReactNode;
    children: React.ReactNode[];
    titles?: string[]
    onChange?: (index: number) => void
    arrows?: boolean
    infinite?: boolean

    buttonStyle?: React.CSSProperties;
}

export const Carousel: React.FC<IProps> = (props) => {
    const {
        top = null,
        buttonStyle = {},
        onChange = () => { },
        arrows = false,
        infinite = false,
        titles,
        children,
    } = props;

    const [slide, setSlide] = React.useState(0);
    const [{width}] = useWindowSize();
    const itemsRef = React.useRef<(HTMLDivElement | null)[]>([]);
    const actionRef = React.useRef<(HTMLDivElement | null)>(null);

    const updateSlide = (index: number) => {
        onChange(index);
        setSlide(index);
    }

    const onRight = () => {
        onCustom(slide < children.length - 1 ? slide + 1 : (infinite ? 0 : slide))
    };
    const onLeft = () => {
        onCustom(slide > 0 ? slide - 1 : (infinite ? children.length - 1 : slide))
    };
    const onCustom = (index: number) => {
        updateSlide(index);

        const offset = itemsRef.current[index]?.offsetLeft ?? 0
        const parent = (actionRef.current?.clientWidth ?? 0);
        const current = (itemsRef.current[index]?.clientWidth ?? 0);
        const delta = offset - (parent - current) / 2
        actionRef.current?.scrollTo({ left: delta, behavior: "smooth" })
    }

    const renderDots = (titles: string[]) => (
        <Row s={8} wrap justify="center" align="center" fullWidth>
            {
                titles.map((title, index) => (
                    <div key={index}
                        className={index !== slide ? "carousel-dot-inactive" : "carousel-dot-active"}
                        onClick={() => onCustom(index)}>
                            <div className={index !== slide ? "inactive" : "active"}/>
                    </div>
                ))
            }
        </Row>
    )

    const renderActionsDefault = (titles: string[]) => (
        <Row wrap justify="center" fullWidth>
            {
                titles.map((title, index) => (
                    <Button
                        black
                        asSubTitle
                        key={index}
                        style={{
                            margin: 4,
                            minWidth: 140,
                            ...buttonStyle
                        }}
                        active={index === slide}
                        onClick={() => onCustom(index)}>{title}</Button>
                ))
            }
        </Row>
    );

    const renderActionsWithArrows = (titles: string[]) => (
        <div style={{ position: "relative" }}>
            <Button black onClick={onLeft} className="left-arrow"/>
            <div
                ref={actionRef}
                style={{
                    alignItems: "flex-start",
                    display: "grid",
                    gridGap: 16,
                    gridAutoFlow: "column",
                    gridTemplateColumns: width > 425 ? "auto" : `repeat(${titles.length}, 100%)`,
                    overflowX: "hidden",
                    margin: "0px 60px",
                    position: 'relative'
                }}>
                {
                    titles.map((title, index) => (
                        <div
                            key={index}
                            ref={el => itemsRef.current[index] = el}>
                            <Button
                                black
                                asSubTitle
                                style={buttonStyle}
                                active={index === slide}
                                onClick={() => onCustom(index)}>{title}</Button>
                        </div>
                    ))
                }
            </div>
            <Button black onClick={onRight} className="right-arrow"/>
        </div>
    );

    const renderSlides = () => (
        <Slides
            noTouch
            slide={slide}
            onLeft={onLeft}
            onRight={onRight}
            content={children}
        />
    );

    return (
        <Col s={12} style={{ position: 'relative', overflow:'hidden' }}>
            {titles && (arrows
                ? renderActionsWithArrows(titles)
                : renderActionsDefault(titles))}
            {titles && renderDots(titles)}
            {top}
            {renderSlides()}
        </Col>
    );
};
