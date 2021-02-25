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
    `    Наши занятия длятся <b>1 час</b> и проходят в группе <b>до 5 человек</b>. Во время обучения дети на практике учатся использовать передовые <b>технические средства</b> (3D-принтер, 3D-сканер, камера, VR-оборудование и д.р.). Также на время занятия каждому <b>ученику</b> предоставляется персональный <b>графический планшет</b>, с помощью которого он обучается работе с <b>3D-редакторами</b>.`,
    `    Чтобы процесс обучения был максимально <b>интересным</b>, мы разработали <b>десятки игровых миров и приложений</b>, погружаясь в историю которых наши ученики выполняют ряд <b>уникальных проектов</b>!`,
    `    По завершении каждого <b>проекта</b> дети не только приобретают актуальные <b>знания</b> и <b>навыки</b>, но и разрабатывают собственные <b>изделия</b> и <b>программы</b>, которые после отправки на наше <b>производство</b> станут для них отличным <b>напоминанием</b> об изученном материале.`,
];

export const Classes: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video2" fullScreen />
        <Section alt={2}>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="md" overflow>
                <Col align="flex-start" style={{ position: "relative" }}
                    m={8}>
                    <Title alt style={{maxHeight: 80}}>
                        Как проходят наши&nbsp;занятия?
                    </Title>
                    <ClassPool type={["text-plane", "text-plane-2"]}>
                        <Col s={16} m={8}>
                            <Label asHtml>{content[0]}</Label>
                            <Label asHtml>{content[1]}</Label>
                            <Hidden less="lg">
                                <Label asHtml>{content[2]}</Label>
                            </Hidden>
                        </Col>
                    </ClassPool>
                    <Hidden less="lg">
                        <Image style={{
                            position: "absolute",
                            right: "91%", top: "5%"
                        }} src="dragon" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)