
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';

export const Welcome: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video1" fullScreen/>
        <Section>
            <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />
            <Container size="sm">
                <Col align="center" style={{position: "relative"}}>
                    <Title>
                        Добро пожаловать
                        <br />
                        в сказочный мир 3D!
                    </Title>
                    <Label>
                        <p>&emsp;&emsp; Наша команда — это люди, объединенные одной общей идеей: пробудить в детях
                        искренний
                                интерес к постоянному совершенствованиюи развитию в сфере 3D-технологий.</p>
                        <p>&emsp;&emsp;Чтобы достичь своей цели, мы разработали десятки игровых приложений, которые
                        позволят
                        ребенку не только с головой погрузитьсяв процесс обучения, но и познакомят его с передовыми
                                инструментами, без которых не обходится ни одна из современных отраслей.</p>
                    </Label>
                <img style={{
                    position: "absolute",
                    top: "-40%",
                    right: "100%",
                }} src="images/intro_knight.png" alt="" />
                </Col>
            </Container>
        </Section>
    </div>
)