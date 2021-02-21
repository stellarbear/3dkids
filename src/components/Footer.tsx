import * as React from 'react';
import {Row} from './Flex';
import {Label} from './Label';

const email = "for3Dkids@yandex.ru";

export const Footer: React.FC = () => {
    const onClick = () => {
        window.location = `mailto:${email}` as any;
    }

    return (
        <Row
            s={16} p={8}
            align="center"
            justify="center"
            onClick={onClick}
            style={{
                background: "#2D2D2D",
                minHeight: 48, cursor: "pointer",
                marginTop: -16
            }}>
            <div style={{
                width: 50,
                height: 50,
                position: "relative",
                backgroundColor: "#FF2747",
                borderRadius: "50%",
            }}>

                <img style={{
                    top: 8,
                    left: 5,
                    position: "absolute"
                }}
                    width={40}
                    src="images/mail.png" alt="" />
            </div>
            <Label>{email}</Label>
        </Row>
    )
}