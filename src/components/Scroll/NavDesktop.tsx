import * as React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Row } from '../Flex';

interface IProps {
    titles: string[]
    active: number
    onClick: (index: number) => void
}

export const NavDesktop: React.FC<IProps> = (props) => {
    const { titles, active, onClick } = props;

    return (
        <div style={{
            zIndex: 10,
            position: "fixed",
            top: 20,
            width: "100vw",
            backgroundColor: "#FFFFFF"
        }}>
            <Container size="lg" thin>
                <Row justify="flex-end">
                    {
                        titles.map((text, index) => (
                            <Button
                                white
                                asSubTitle
                                key={index}
                                active={index === active}
                                onClick={() => onClick(index)}>
                                {text}
                            </Button>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}