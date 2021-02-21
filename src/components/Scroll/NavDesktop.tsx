import * as React from 'react';
import { Button } from '../Button';
import { Container } from '../Container';
import { Row } from '../Flex';
import { Hidden } from '../Hidden';

interface IProps {
    titles: string[]
    active: number
    onClick: (index: number) => void
}

export const NavDesktop: React.FC<IProps> = (props) => {
    const { titles, active, onClick } = props;

    return (
        <div style={{
            zIndex: 20,
            position: "fixed",
            top: 0,
            width: "100vw",
            backgroundColor: "#000000"
        }}>
            <Container size="xl" thin>
                <Row justify="space-between" align="center">
                    <Hidden less="lg">
                        <img
                            style={{margin: "0px 8px", height: 46}}
                            src="images/logo.png" />
                    </Hidden>
                    <Row justify="flex-end">
                        {
                            titles.map((text, index) => (
                                <Button
                                    white
                                    asSubTitle
                                    key={index}
                                    style={{minWidth: 160}}
                                    active={index === active}
                                    onClick={() => onClick(index)}>
                                    {text}
                                </Button>
                            ))
                        }
                    </Row>
                </Row>
            </Container>
        </div>
    )
}