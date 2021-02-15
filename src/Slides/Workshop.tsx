import React from 'react';
import { Video } from '../components/Video';
import { Image } from '../components/Image';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';
import { Hidden } from '../components/Hidden';
import { ClassPool } from '../components/ClassPool';

const content = [
    `   Во время занятий дети изучают на практике все виды 3D-производства, проходя вместе с нами каждый этап от задумки до реализации. Но, как известно, любое производство имеет однотипные процессы, которые могли бы затратить большую часть времени, отведенного под наши занятия.`,
    `   И чтобы решить эту проблему наша команда организовала собственное 3D-производство. Оно позволило сконцентрировать внимание детей на динамическом обучении и выполнении интересных проектов, а также уделить внеучебное время производству качественных 3D-продуктов, в создании которых наши ученики принимали непосредственное участие.`
]

export const Workshop: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video3" fullScreen />
        <Section alt={3}>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="lg">
                <Col s={8} m={8} align="flex-start" style={{ position: "relative" }}>
                    <Title alt>
                        Для чего нужна целая&nbsp;мастерская?
                    </Title>
                    <ClassPool type={["text-plane", "text-plane-3"]}>
                        <Col s={16} m={8}>
                            <Label>{content[0]}</Label>
                            <Label>{content[1]}</Label>
                        </Col>
                    </ClassPool>
                    <Hidden less="lg">
                        <Image style={{
                            position: "absolute",
                            top: "23%",
                            left: "80%",
                        }} src="anvil" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)