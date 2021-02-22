import React from 'react';
import {Video} from '../components/Video';
import {Image} from '../components/Image';
import {Title} from '../components/Title';
import {Label} from '../components/Label';
import {Col} from '../components/Flex';
import {Container} from '../components/Container';
import {PlayButton} from '../components/PlayButton';
import {Section} from '../components/Section';
import {Hidden} from '../components/Hidden';
import {ClassPool} from '../components/ClassPool';
import {Footer} from '../components/Footer';

const content = [
    `   Во время занятий дети изучают <b>на практике</b> все виды <b>3D-производства</b>, проходя вместе с нами <b>каждый этап</b> от задумки до реализации. Но, как известно, любое <b>производство</b> имеет однотипные <b>процессы</b>, которые могли бы затратить большую часть <b>времени</b>, отведенного под наши <b>занятия</b>.`,
    `   И чтобы решить эту <b>проблему</b> наша команда организовала собственное <b>3D-производство</b>. Оно позволило сконцентрировать <b>внимание детей</b> на динамическом <b>обучении</b> и выполнении интересных <b>роектов</b>, а также уделить <b>внеучебное время</b> производству качественных <b>3D-продуктов</b>, в создании которых наши ученики принимали <b>непосредственное участие</b>.`
]

export const Workshop: React.FC = () => (
    <div style={{color: "white"}}>
        <Video src="video3" fullScreen />
        <Section alt={3}>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="lg" overflow>
                <Col m={8} align="flex-start" style={{position: "relative"}}>
                    <Title alt>
                        Для чего нужна целая&nbsp;мастерская?
                    </Title>
                    <ClassPool type={["text-plane", "text-plane-3"]}>
                        <Col s={16} m={8}>
                            <Label asHtml>{content[0]}</Label>
                            <Label asHtml>{content[1]}</Label>
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
            <Footer />
        </Section>
    </div>
)