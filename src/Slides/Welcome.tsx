
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';
import { Hidden } from '../components/Hidden';

const content = `       Наша команда — это люди, объединенные одной общей идеей: 

    Пробудить в детях искренний интерес к постоянному совершенствованиюи развитию в сфере 3D-технологий.

    Для этого мы разработали десятки игровых приложений, которые позволят ребенку не только с головой погрузитьсяв процесс обучения, но и познакомят его с передовыми инструментами, без которых не обходится ни одна из современных отраслей.`

export const Welcome: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video1" fullScreen />
        <Section>
            <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />
            <Container size="xs" style={{ marginBottom: 25 }}>
                <Col align="center" style={{ position: "relative" }}>
                    <Title>
                        Добро пожаловать
                        <br />
                        в сказочный мир 3D!
                    </Title>
                    <Label style={{ marginLeft: 10 }}>
                        {content}
                    </Label>
                    <Hidden less="sm">
                        <img style={{
                            position: "absolute",
                            top: "-25%",
                            right: "90%",
                        }} src="images/intro_knight.png" alt="" />
                    </Hidden>
                </Col>
            </Container>
        </Section>
    </div>
)