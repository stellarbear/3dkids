
import { Image } from '../components/Image';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col, Row } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';
import { Carousel } from '../components/Carousel';
import * as React from 'react';

const content = [
    ["Скетч проекта 1", "sketch_1",
        `   Моделирование лежит в основе всех существующих 3D-технологий! Поэтому начать свое знакомство с миром 3D стоит имено с него.

    Во время обучния нас ждет:
-изучение современных инструментов и приемов моделирования;`],
    ["Скетч проекта 2", "study",
        `   Современое производство не обходится без 3D-печати. 
Поэтому мы создали курс, который познакомит ребенка со всеми этапами печати и научит создавать собственые изделия!

    Во время обучния нас ждет:`],
    ["Скетч проекта 3", "sketch_1",
        `   3D-графика является неотъемлемой частью Кинематографа.
Поэтому мы разработали курс, который поможет ребенку прикоснуться
к передовым 3D-технологиям кинопроизводства.

    Во время обучния нас ждет:
-знакомство с основными приемами кинопроизводства; `],
    ["Скетч проекта 4", "study",
        `   Сегодня создание VR-приложений  стало востребованным направлением!
Его используют как на телевидении, так и в сфере эвентов.
Поэтому мы подготовили курс, который познакомит ребенка с процессами разработки игровых приложений, а так же сферами их применения.`]
]

export const Sketches: React.FC = () => {
    const [index, setIndex] = React.useState(0)

    return (
        <div style={{ color: "white" }}>
            <Image src={content[index][1]} alt="sketch image" fullScreen />
            <Section top={40}>
                <Container size="md" style={{ overflow: "hidden" }}>
                    <Col s={16}>
                        <Title>
                            Каждый проект
                            <br />
                            это целое приключение...
                    </Title>
                        <Carousel
                            arrows
                            onChange={setIndex}
                            titles={content.map(c => c[0])}
                        >
                            {content.map(([, , text], index) => (
                                <Row m={8} key={index}>
                                    <Label>{text}</Label>
                                </Row>
                            ))}
                        </Carousel>
                    </Col>
                </Container>
            </Section>
        </div>
    )
}