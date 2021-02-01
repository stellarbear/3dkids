import * as React from "react";
import { Button } from "../Button";
import { Col, Row } from "../Flex";
import { Slides } from "./Slides";

interface IProps {
    children: React.ReactNode[];
    titles?: string[]
    onChange?: (index: number) => void
    arrows?: boolean

    buttonStyle?: React.CSSProperties;
}

export const Carousel: React.FC<IProps> = (props) => {
    const {
        buttonStyle = {},
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
                        style={buttonStyle}
                        active={index === slide}
                        onClick={() => onCustom(index)}>{title}</Button>
                ))
            }
        </Row>
    );

    const renderActionsWithArrows = (titles: string[]) => (
        <div style={{ position: "relative" }}>
            <Button black asSubTitle onClick={() => {
                onLeft();
                const left = slide > 0 ? slide - 1 : slide;
                const offset = itemsRef.current[left]?.offsetLeft ?? 0
                const parent = (actionRef.current?.clientWidth ?? 0);
                const current = (itemsRef.current[left]?.clientWidth ?? 0);
                const delta = offset - (parent - current) / 2
                actionRef.current?.scrollTo({ left: delta, behavior: "smooth" })
            }} style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)"
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
                            key={index}
                            ref={el => itemsRef.current[index] = el}>
                            <Button
                                black
                                asSubTitle
                                style={buttonStyle}
                                active={index === slide}
                                onClick={() => {
                                    onCustom(index);
                                    const left = (itemsRef.current[index]?.offsetLeft ?? 0);
                                    const parent = (itemsRef.current[index]?.parentElement?.clientWidth ?? 0);
                                    const current = (itemsRef.current[index]?.clientWidth ?? 0);
                                    const delta = left - (parent - current) / 2
                                    itemsRef.current[index]?.parentElement?.scrollTo({ left: delta, behavior: "smooth" })
                                }}>{title}</Button>
                        </div>
                    ))
                }
            </div>
            <Button black asSubTitle onClick={() => {
                onRight();
                const right = slide < children.length - 1 ? slide + 1 : slide;
                const offset = itemsRef.current[right]?.offsetLeft ?? 0
                const parent = (actionRef.current?.clientWidth ?? 0);
                const current = (itemsRef.current[right]?.clientWidth ?? 0);
                const delta = offset - (parent - current) / 2
                actionRef.current?.scrollTo({ left: delta, behavior: "smooth" })
            }} style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)"
            }}>
                {'>'}
            </Button>
        </div>
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
        <Col s={16} style={{ position: 'relative', overflow:'hidden' }}>
            {titles && (arrows
                ? renderActionsWithArrows(titles)
                : renderActionsDefault(titles))}
            {renderSlides()}
        </Col>
    );
};
