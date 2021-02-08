import React from 'react';
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';
import { Hidden } from '../components/Hidden';
import { Image } from '../components/Image';
import { ClassPool } from '../components/ClassPool';

const content = [
    `   3Dkids — это команда людей, объединенных одной общей идеей:`,
    `    “Пробудить в детях искренний интерес к постоянному развитию в одной из самых востребованных отраслей современности”.`,
    `   Для этого мы разработали курсы, проходящие с использованием передовых 3D-технологий и игровых приложений, которые позволят ребенку с головой погрузиться в процесс обучения и познакомят его с такими направлениями как:`,
    `3D-моделированиЕ, 3D-печать, кинопроизводство, программирование.`
];

export const Welcome: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video1" fullScreen />
        <Section alt={1}>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="md">
                <Col s={8} m={8} align="flex-start" style={{ position: "relative" }}>
                    <Title alt style={{maxHeight: 100}}>
                        Добро пожаловать
                        <br />
                        в сказочный мир 3D!
                    </Title>
                    <ClassPool type={["text-plane", "text-plane-1"]}>
                        <Col s={16} m={8}>
                            <Label>{content[0]}</Label>
                            <Label>{content[1]}</Label>
                            <Label>{content[2]}</Label>
                            <Label>{content[3]}</Label>
                        </Col>
                    </ClassPool>
                    <Hidden less="lg">
                        <Image style={{
                            position: "absolute",
                            right: "88%", top: "18%"
                        }} src="intro_knight" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)