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
`   Производство памятных изделий по завершении каждого проекта — это длительный процесс, который мог занять большуючасть времени, отведенного под обучение.`,
`   Но нас подобное не устраивало, и поэтому наша команда подготовила собственное 3D-производство, на котором мы во внеучебное время воплощаем в жизнь проекты наших учеников.`,
`   Такое решение позволило нам не только сконцентрироваться на обучении, но и уделить больше времени производству качественных изделий. `
]

export const Workshop: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video3" fullScreen />
        <Section alt>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="md">
                <Col s={8} m={8} align="center" style={{ position: "relative" }}>
                    <Title alt>
                        Для чего нам нужна мастерская
                    </Title>
                    <ClassPool type="text-plane">
                        <Col s={16} m={8}
                            style={{
                                padding: "8px 10%",
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
                            top: "30%",
                            left: "85%",
                        }} src="anvil" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)