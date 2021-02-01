import React from 'react';
import { Image } from '../components/Image';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col, Row } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';
import { Carousel } from '../components/Carousel';
import { Hidden } from '../components/Hidden';

const content = [
[
"Моделирование", "thumb_model",
`        Моделирование станет отличным стартом для ребенка в знакомстве с миром 3D. На наших занятиях мы изучаем программу Tinkercad - это простой и понятный графический редактор, разработанный компанией Autodesk специально для обучения детей.`,
`Во время обучения нас ждет`,
`-Знакомство с основными понятиями 3D-графики;
-Изучение инструментов моделирования;
-Работа с фотограмметрией (сканирование предметов);  
-Выполнение увлекательных проектов для закрепления изученного.`
], [
"3D-печать", "thumb_3d_print",
`   Kурс по 3D-печати на практике научит ребенка работе с самым быстрым, простым и экологически чистым способом производства. Это направление подарит новую возможность самовыражения через создание собвстенных уникальных поделок.`,
`Во время обучения нас ждет`,
`-Знакомство с устройством 3D-принтера;
-Подготовка моделей к печати (слайсинг);
-Запуск нашей первой 3D-печати;
-Выполнение проектов, создание подарков и игруше`
], [
"Кинопроизводство", "thumb_film_making",
`   Kинопроизводство - это курс, который нацелен на практическую работу детей с кинооборудованием и дополненной реальностью. Все это дает ребенку отличную возможность прикоснуться к  передовым технологиям, использующимися как на телевидении, так и в кино.`,
`Во время обучения нас ждет`,
`-Знакомство с основными понятиями кинопроизводства;
-Изучение принципов работы с Камерой;
-Работа с хромакеем и освещением;
-Использование дополненной реальности для проведения трансляций.`
], ["VR-разработка", "thumb_vr",
`   Сборка VR-локаций - это уникальный способ презентации своих проектов!Поэтому мы подготовили курс, который на практике научит ребенка создавать с помощью Unreal Engine 4 собственные виртуальные миры, а так же познакомит со всеми перспективными сферами их применения.`,
`Во время обучения нас ждет`,
`-Изучение существующих сфер применения VR;
-знакомство и работа с игровым движком (Unreal Engine 4);
-сборка собственных сказочных локаций;
-Подготовка уникальных виртуальных проектов к презентации.`
]
]

export const Study: React.FC = () => {
    const [index, setIndex] = React.useState(0);

    const renderImage = (icon: string) => (
        <Hidden less="sm" >
            <Image src={icon} alt="" style={{maxHeight: 180}}/>
        </Hidden>
    )

    const renderText = (text: string[]) => (
        <Col s={8}>
            <Label>{text[0]}</Label>
            &emsp;<Label style={{textDecoration: "underline"}}>{text[1]}</Label>
            <Label>{text[2]}</Label>
        </Col>
    )

    return (
        <div style={{ color: "white" }}>
            <Image src={`study${index}`} alt="slide background" fullScreen />
            <Section top={40}>
                <Container size="sm" style={{ overflow: "hidden" }}>
                    <Col s={8}>
                        <Title>
                            Какие дисциплины
                            <br />
                            мы изучаем!
                        </Title>
                        <Carousel
                            onChange={setIndex}
                            titles={content.map(c => c[0])}
                        >
                            {content.map(([, icon, ...text], index) => (
                                <Row m={8} s={32} key={index} justify="center">
                                    {
                                        (index % 2)
                                            ? (
                                                <>
                                                    {renderImage(icon)}
                                                    {renderText(text)}
                                                </>
                                            ) : (
                                                <>
                                                    {renderText(text)}
                                                    {renderImage(icon)}
                                                </>
                                            )
                                    }
                                </Row>
                            ))}
                        </Carousel>
                    </Col>
                </Container>
            </Section>
        </div>
    )
}