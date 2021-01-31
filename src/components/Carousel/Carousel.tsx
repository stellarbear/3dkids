import * as React from "react";
import { Button } from "../Button";
import { Col, Row } from "../Flex";
import { Slides } from "./Slides";

interface IProps {
    children: React.ReactNode[];
    titles?: string[]
    onChange?: (index: number) => void
    arrows?: boolean
}

export const Carousel: React.FC<IProps> = (props) => {
    const {
        onChange = () => { },
        arrows = false,
        titles,
        children,
    } = props;

    const [slide, setSlide] = React.useState(0);
    const itemsRef = React.useRef<(HTMLDivElement | null)[]>([]);
    const actionRef = React.useRef<(HTMLDivElement | null)>(null);

    const updateSlide = (index: number) => {
        onChange(index);
        setSlide(index);
    }

    const onRight = () => updateSlide(slide < children.length - 1 ? slide + 1 : slide);
    const onLeft = () => updateSlide(slide > 0 ? slide - 1 : slide);
    const onCustom = (index: number) => updateSlide(index);

    const renderActionsDefault = (titles: string[]) => (
        <Row s={16} wrap justify="center" fullWidth>
            {
                titles.map((title, index) => (
                    <Button
                        black
                        asSubTitle
                        key={index}
                        active={index === slide}
                        onClick={() => onCustom(index)}>{title}</Button>
                ))
            }
        </Row>
    );

    const renderActionsWithArrows = (titles: string[]) => (
        <>
            <Button black asSubTitle onClick={() => {
                onLeft();
                const left = slide > 0 ? slide - 1 : slide;
                const offset = itemsRef.current[left]?.offsetLeft ?? 0
                actionRef.current?.scrollTo({ left: offset, behavior: "smooth" })
            }} style={{
                position: "absolute"
            }}>
                {'<'}
            </Button>
            <div
                ref={actionRef}
                style={{
                    alignItems: "flex-start",
                    display: "grid",
                    gridGap: 16,
                    gridAutoFlow: "column",
                    gridAutoColumns: "minmax(max-content,1fr)",
                    overflowX: "auto",
                    margin: "0px 60px",
                    position: 'relative'
                }}>
                {
                    titles.map((title, index) => (
                        <div
                            ref={el => itemsRef.current[index] = el}>
                            <Button
                                black
                                asSubTitle
                                key={index}
                                active={index === slide}
                                onClick={() => {
                                    onCustom(index);
                                    const left = (itemsRef.current[index]?.offsetLeft ?? 0);
                                    itemsRef.current[index]?.parentElement?.scrollTo({ left, behavior: "smooth" })
                                }}>{title}</Button>
                        </div>
                    ))
                }
            </div>
            <Button black asSubTitle onClick={() => {
                onRight();
                const right = slide < children.length - 1 ? slide + 1 : slide;
                const offset = itemsRef.current[right]?.offsetLeft ?? 0
                actionRef.current?.scrollTo({ left: offset, behavior: "smooth" })
            }} style={{
                position: "absolute",
                right: 0,
            }}>
                {'>'}
            </Button>
        </>
    );

    const renderSlides = () => (
        <Slides
            slide={slide}
            onLeft={onLeft}
            onRight={onRight}
            content={children}
        />
    );

    return (
        <Col s={16} style={{ position: 'relative' }}>
            {titles && (arrows
                ? renderActionsWithArrows(titles)
                : renderActionsDefault(titles))}
            {renderSlides()}
        </Col>
    );
};
