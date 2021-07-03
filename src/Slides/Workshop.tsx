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
import "./index.css"

const content = [
    `   Во время занятий дети изучают <b>на практике</b> все виды <b>3D-производства</b>, проходя вместе с нами <b>каждый этап</b> от задумки до реализации. Но, как известно, любое <b>производство</b> имеет однотипные <b>процессы</b>, которые могли бы затратить большую часть <b>времени</b>, отведенного под наши <b>занятия</b>.`,
    `   И чтобы решить эту <b>проблему</b> наша команда организовала собственное <b>3D-производство</b>. Оно позволило сконцентрировать <b>внимание детей</b> на динамическом <b>обучении</b> и выполнении интересных <b>проектов</b>, а также уделить <b>внеучебное время</b> производству качественных <b>3D-продуктов</b>, в создании которых наши ученики принимали <b>непосредственное участие</b>.`
]

export const Workshop: React.FC = () => (
    <div className="slide-gradient">
        <Video src="video3" fullScreen />
        <Section alt>
            {false && <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />}
            <Container size="lg" overflow>
                <Col m={8} align="flex-start" style={{position: "relative"}}>
                    <Title alt>
                        Ну и немного о нашей команде!
                    </Title>
                    <ClassPool type={["text-plane", "text-plane-3"]}>
                        <Col s={16} m={8}>
                            <Label asHtml>{content[0]}</Label>
                            <Label asHtml>{content[1]}</Label>
                        </Col>
                    </ClassPool>
                    <Hidden less="lg">
                        <Image className="image-sticker" style={{
                            position: "absolute",
                            top: "19%",
                            left: "81%",
                            zoom: 0.85
                        }} src="anvil" alt="" />
                    </Hidden>
                    <Hidden less="md">
                        <Image className="image-sticker" style={{
                            position: "absolute",
                            left: "-2%", bottom: "2%",
                            zoom: 0.9
                        }} src="sm5" alt="" />
                    </Hidden>
                    <Hidden less="md">
                        <Image className="image-sticker" style={{
                            position: "absolute",
                            left: "3%",
                            top: "-33%",
                            transform: "rotate(26deg)",
                            zIndex: 10,
                        }} src={`arrow_2_3_4_5`} alt="" />
                    </Hidden>
                </Col>
            </Container>
            <Footer />
        </Section>
    </div>
)