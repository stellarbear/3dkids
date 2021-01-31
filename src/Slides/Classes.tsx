
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';

export const Classes: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video1" fullScreen />
        <Section>
            <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />
            <Container size="sm">
                <Col align="center" style={{ position: "relative" }}>
                    <Title>
                        Как проходят
                        <br />
                        наши занятия
                    </Title>
                    <Label>
                        <p>&emsp;&emsp;Каждое занятие длится 1 час и построено таким образом, чтобы дети смогли на практике познакомиться с передовыми 3D-технологиями.</p>

                        <p>&emsp;&emsp;Так же мы стремились сделать процесс обучения максимально интересным, поэтому разработали десятки игровых миров, погружаясь в историю которых дети выполняют заранее подготовленные проекты!</p>

                        <p>&emsp;&emsp;По завершению каждого проекта наши ученики преобретают не только актуальные знания и полезные навыки, но и получают собственные изделия, которые в дальнейшем будут напоминать им о достигнутом успехе.</p>
                    </Label>
                </Col>
            </Container>
        </Section>
    </div>
)