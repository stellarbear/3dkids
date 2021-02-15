import * as React from 'react';
import { Button } from '../Button';
import { ClickAway } from '../ClickAway';
import { Col } from '../Flex';
import { MenuButton } from '../MenuButton';

interface IProps {
    titles: string[]
    active: number
    onClick: (index: number) => void
}

export const NavMobile: React.FC<IProps> = (props) => {
    const { titles, active, onClick } = props;
    const [opened, setOpened] = React.useState(false);

    return (
        <>
            <div style={{
                zIndex: 20,
                position: "fixed",
                top: 20,
                right: 10,
            }}>
                <MenuButton
                    opened={opened}
                    onClick={() => setOpened(!opened)}
                />
            </div>
            <ClickAway
                opened={opened}
                onClick={() => setOpened(false)}
            />
            <div style={{
                zIndex: 10,
                position: "fixed",
                minWidth: 160,
                left: "50%",
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(79, 121, 228, 0) 0.01%, rgba(6, 25, 48, 0.88) 0.02%, rgba(11, 52, 74, 0.77) 10.94%, #021531 100%)",
                transform: `translate(-50%, ${opened ? '-1' : '-100'}%)`,
                transition: "all 0.3s",
                padding: 34,
                border: "2px solid #FFFFFF",
                borderRadius: 5,
                color: "white"
            }}>
                <Col justify="flex-end" s={16}>
                    {
                        titles.map((text, index) => (
                            <Button
                                black
                                asSubTitle
                                key={index}
                                active={index === active}
                                style={{width: 120}}
                                onClick={() => {
                                    onClick(index)
                                    setOpened(false)
                                }}>
                                {text}
                            </Button>
                        ))
                    }
                </Col>
            </div>
        </>
    )
}