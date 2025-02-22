import * as React from 'react';
import { cn } from '../../helpers/cn';
import { Label } from '../Label';
import { SubTitle } from '../SubTitle';
import { Title } from '../Title';
import './Button.css'

interface IPropsBlack {
    black: boolean
}

interface IPropsWhite {
    white: boolean
}

interface IPropsLabel {
    asLabel?: boolean
}

interface IPropsTitle {
    asTitle?: boolean
}

interface IPropsSubtitle {
    asSubTitle?: boolean
}

type IProps = {
    onClick: () => void;
    active?: boolean;
    style?: React.CSSProperties
    className?: string
} & (IPropsBlack | IPropsWhite)
& (IPropsLabel | IPropsTitle | IPropsSubtitle)

const renderContent = (props: IProps, children: React.ReactNode) => {
    if ("asLabel" in props) {
        return <Label>{children}</Label>
    } else if ("asTitle" in props) {
        return <Title>{children}</Title>
    } else if ("asSubTitle" in props) {
        return <SubTitle>{children}</SubTitle>
    } else {
        return <>{children}</>
    }
}

const getClass = (props: IProps) => {
    if ("white" in props) {
        return "button-white"
    } else if ("black" in props) {
        return "button-black"
    } else {
        return "button"
    }
}

export const Button: React.FC<IProps> = (props) => {
    const { children, active, onClick, style = {}, className } = props;

    const classNameType = getClass(props);
    const content = renderContent(props, children)

    return (
        <div style={{...style, userSelect: "none"}}
         className={cn(
            active && `${classNameType}-active`, 
            `${classNameType}`,
            className
            )} onClick={onClick}>
            {content}
        </div>
    )
}