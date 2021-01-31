
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { Label } from '../components/Label';
import { Col } from '../components/Flex';
import { Container } from '../components/Container';
import { PlayButton } from '../components/PlayButton';
import { Section } from '../components/Section';

export const Workshop: React.FC = () => (
    <div style={{ color: "white" }}>
        <Video src="video1" fullScreen />
        <Section>
            <PlayButton link="test" style={{
                transform: "translate(0, -50%)"
            }} />
            <Container size="sm">
                <Col align="center" style={{ position: "relative" }}>
                    <Title>
                        В нашей мастерской
                        <br />
                        ожидают ваши проекты!
                    </Title>
                    <Label>
                        <p>&emsp;&emsp;Время — ресурс, которым наши занятия, к сожалению, ограничены! Мы стремимся дать нашим ученикам
максимум полезной информации и сделать так, чтобы результаты завершённых проектов остались с ними. Производство изделий — это длительный процесс,
который не должен тратить время от занятий!</p>

                        <p>&emsp;&emsp;Поэтому наша команда подготовила собственное 3D-производство, На котором мы во внеучебное время воплощаем в жизнь проекты наших учеников.</p>
                    </Label>
                </Col>
            </Container>
        </Section>
    </div>
)