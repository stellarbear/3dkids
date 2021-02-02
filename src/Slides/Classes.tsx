import React from 'react';
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';

const content = [
    `   Наши занятия длятся 1 час и проходят в группе до 5 человек. Для каждого ученика подготовлен персональный графический планшет, на котором он обучается работе с 3D-редакторами. 

Чтобы процесс обучения был максимально интересным, мы разработали десятки игровых миров, погружаясь в историю которых дети выполняют уникальные проекты!

По завершении каждого проекта дети не только приобретают актуальные знания и навыки, но и разрабатывают собственные изделия, которые после отправки на произодство станут для них отличным напоминанием об изученном материале.`
];

export const Classes: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video2" fullScreen />
        <Section>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="xs">
                <Col align="center" style={{ position: "relative" }}
                    s={8} m={8}>
                    <Title>
                        Как проходят
                        <br />
                        наши занятия
                    </Title>
                    <Label>
                        {content}
                    </Label>
                </Col>
            </Container>
        </Section>
    </div>
)