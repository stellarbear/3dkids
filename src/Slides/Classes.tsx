import React from 'react';
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';
import { ClassPool } from '../components/ClassPool';
import { Hidden } from '../components/Hidden';
import { Image } from '../components/Image';

const content = [
    `   Наши занятия длятся 1 час и проходят в группе до 5 человек. Во время обучения дети на практике учатся использовать передовые технические средства (3D-принтер, 3D-сканер, камера, Vr-оборудование и д.р.). Также на время занятия каждому ученику предоставляется  персональный графический планшет, с помощью которого он обучается работе с 3D-редакторами.`,
    `    Чтобы процесс обучения был максимально интересным, мы разработали десятки игровых миров и приложений, погружаясь в историю которых наши ученики выполняют ряд уникальных проектов!`,
    `    По завершении каждого проекта дети не только приобретают актуальные знания и навыки, но и разрабатывают собственные изделия и программы, которые после отправки на наше производство станут для них отличным напоминанием об изученном материале.`,
];

export const Classes: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video2" fullScreen />
        <Section alt={2}>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="lg">
                <Col align="center" style={{ position: "relative" }}
                    s={8} m={8}>
                    <Title alt style={{width: "90%"}}>
                        Как проходят наши занятия?
                    </Title>
                    <ClassPool type="text-plane">
                        <Col s={16} m={8}
                            style={{
                                padding: "16px 5% 16px 15%",
                            }}
                        >
                            <Label>{content[0]}</Label>
                            <Label>{content[1]}</Label>
                            <Label>{content[2]}</Label>
                        </Col>
                    </ClassPool>
                    <Hidden less="sm">
                        <Image style={{
                            position: "absolute",
                            right: "88%", top: "22%"
                        }} src="dragon" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)