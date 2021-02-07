import * as React from 'react';
import { Divider } from '../components/Divider';
import { Col } from '../components/Flex';
import { Section } from '../components/Section';
import { SubTitle } from '../components/SubTitle';
import { Video } from '../components/Video';

export const Mobile: React.FC = () => (
    <Col style={{ color: "white" }}>
        <Video src="video1" fullScreen />
        <Section>
            <Col s={16} m={16}>
                <SubTitle>Мобильная версия в разработке</SubTitle>
                <Divider/>
                <SubTitle>Для просмотра сайта используйте версию для компьютера</SubTitle>
            </Col>
        </Section>
    </Col>
)