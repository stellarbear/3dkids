import React from 'react';
import { Image } from '../components/Image';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { Section } from '../components/Section';
import { Carousel } from '../components/Carousel';
import { Divider } from '../components/Divider';
import { Mount } from '../components/Mount';
import "./index.css";
import { Hidden } from '../components/Hidden';

const top = `   <b>Во время обучения мы с учениками выполняем ряд уникальных проектов, которые были созданы с целью вызвать интерес у детей к процессу обучения и на практике закрепить полученные знания:</b>`;

const content = [
[
"Волшебное поселение", "model",
`   В течение работы над <b>проектом</b> мы с детьми осваиваем моделирование на примере создания собственного <b>3D-поселения</b> (домов, элементов окружения и персонажей). 
    От занятия к занятию оно развивается и растет вместе со <b>знаниями</b> наших учеников. Готовые модели отправляются на <b>3D-печать</b>, чтобы затем стать для детей отличным <b>напоминанием</b> о достигнутом успехе.`
], [
"Настоящее клонирование", "scan",
`   Этот <b>проект</b> нацелен на <b>практическую работу</b> детей с такими современными направлениями, как <b>фотограмметрия</b> и <b>3D-сканирование</b>. 
    С помощью <b>фотокамеры</b> и программы <b>Zephyr</b> мы с детьми автоматизируем процесс переноса реальных игрушек в виртуальное пространство, чтобы впоследствии <b>клонировать</b> объект на <b>3D-принтере</b>.`
], [
"Серия 3D‑игрушек", "print",
`   Выполняя <b>проекты по 3D-печати</b>, наши ученики под руководством преподавателей производят <b>серию игрушек</b> (от подарочных изделий, состоящих из одного элемента, до многофункциональных механизмов).
    Помимо изделий дети получают <b>уникальный опыт</b> и <b>знания</b>, необходимые им в будущем для <b>прототипирования</b> и создания собственных <b>произведений искусства</b>. `
], [
"AR‑трансляция", "AR",
`   Сегодня <b>дополненная реальность</b> является активно развивающимся и очень перспективным направлением в сфере <b>телевидения</b> и <b>кино</b>.
    Поэтому мы подготовили для наших учеников <b>проекты</b>, которые дадут им отличную возможность <b>на практике</b> поработать с <b>камерой</b>, <b>хромакеем</b>, <b>системой трекинга</b>, чтобы затем вместе провести собственную <b>трансляцию с дополненной реальностью</b>.`
], [
"Покоряем VR миры", "VR",
`   Работая над <b>VR-проектами</b>, наши ученики знакомятся с гибким игровым движком (<b>Unreal engine 4</b>). 
    С его помощью они собирают тематические <b>виртуальные локации</b> (сказочный лес и класс будущего). После этого мы упаковываем их в полноценное <b>игровое приложение</b>, которое станет отличным завершением нашего <b>обучения</b>. `
]
]

export const Sketches: React.FC = () => {
    const [index, setIndex] = React.useState(0)

    return (
        <div style={{ color: "white" }}>
            <Image responsive src={`sketch-${content[index][1]}`} alt="sketch image" fullScreen />
            <Section>
                <Container size="sm">
                    <Col s={8} m={8}>
                        <Title style={{width: "100%"}}>
                            Примеры обучающих проектов:
                        </Title>
                        <Divider style={{marginBottom: 8, width: "100%"}}/>
                        <Mount>
                            <Carousel
                                arrows infinite
                                onChange={setIndex}
                                buttonStyle={{minHeight: 44}}
                                titles={content.map(c => c[0])}
                                top={(
                                    <Col s={16}>
                                        <Label asHtml>{top}</Label>
                                        <Divider/>
                                    </Col>
                                )}
                            >
                                {content.map(([, , text], index) => (
                                    <Col s={16} key={index}>
                                        <Label asHtml>{text}</Label>
                                    </Col>
                                ))}
                            </Carousel>
                            <Hidden less="md">
                                <Image className="image-sticker" style={{
                                    position: "absolute",
                                    right: "0%", top: "-38%",
                                    zoom: 0.9
                                }} src="sm4" alt="" />
                            </Hidden>
                            <Hidden less="md">
                                <Image className="image-sticker" style={{
                                    position: "absolute",
                                    left: "-4%",
                                    top: "-33%",
                                    transform: "scaleX(-1) rotate(-214deg)",
                                    zIndex: 10,
                                }} src={`arrow_2_3_4_5`} alt="" />
                            </Hidden>
                        </Mount>
                    </Col>
                </Container>
            </Section>
        </div>
    )
}