import * as React from "react";
import { Button } from "../Button";
import { Col, Row } from "../Flex";
import { Slides } from "./Slides";

interface IProps {
    children: React.ReactNode[];
    titles?: string[]
    onChange?: (index: number) => void
}

export const Carousel: React.FC<IProps> = (props) => {
    const {
        onChange = () => { },
        titles,
        children,
    } = props;

    const [slide, setSlide] = React.useState(0);

    const updateSlide = (index: number) => {
        onChange(index);
        setSlide(index);
    }

    const onRight = () => updateSlide(slide < children.length - 1 ? slide + 1 : slide);
    const onLeft = () => updateSlide(slide > 0 ? slide - 1 : slide);
    const onCustom = (index: number) => updateSlide(index);

    const renderActions = (titles: string[]) => (
        <Row s={16} justify="center" wrap>
            {
                titles.map((title, index) => (
                    <Button
                        black
                        asLabel
                        key={index}
                        active={index === slide}
                        onClick={() => onCustom(index)}>{title}</Button>
                ))
            }
        </Row>
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
        <Col s={16}>
            {titles && renderActions(titles)}
            {renderSlides()}
        </Col>
    );
};