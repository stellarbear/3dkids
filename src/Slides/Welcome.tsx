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
import "./index.css"

const content = [
    `   <b>3Dkids</b> — это команда людей, объединенных одной общей идеей:`,
    `   <b><i>“Пробудить в детях искренний интерес к постоянному развитию в одной из самых востребованных отраслей современности”.</i></b>`,
    `   Для этого мы разработали <b>курсы</b>, проходящие с использованием передовых <b>3D-технологий</b> и игровых <b>приложений</b>, которые позволят ребенку с головой погрузиться в процесс <b>обучения</b> и познакомят его с такими <b>направлениями</b> как:`,
    `<b>3D-моделирование, 3D-печать, AR-кинопроизводство, VR-разработка.</b>`
];

export const Welcome: React.FC = () => (
    <div className="slide-gradient">
        <Video src="video1" fullScreen logo/>
        <Section alt>
            <PlayButton link="https://www.youtube.com/embed/wNPn--yUPP0"/>
            <Container size="sm" overflow>
                <Col m={8} align="flex-start" style={{ position: "relative" }}>
                    <Title alt style={{maxHeight: 100}}>
                        изучать 3D с нами - это Легко и весело!
                    </Title>
                    <ClassPool type={["text-plane", "text-plane-1"]}>
                        <Col s={16} m={8}>
                            <Label asHtml>{content[0]}</Label>
                            <Label asHtml>{content[1]}</Label>
                            <Label asHtml>{content[2]}</Label>
                            <Label asHtml>{content[3]}</Label>
                        </Col>
                    </ClassPool>
                    <Hidden less="md">
                        <Image className="image-sticker" style={{
                            position: "absolute",
                            right: "87%", top: "14%", zoom: "0.85"
                        }} src="intro_knight" alt="" />
                    </Hidden>
                    <Hidden less="md">
                        <Image className="image-sticker" style={{
                            position: "absolute",
                            right: "-2%", bottom: "3%",
                            zoom: 0.9
                        }} src="sm1" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)