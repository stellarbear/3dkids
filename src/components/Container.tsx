import * as React from 'react';

type Size = "xs" | "sm" | "md" | "lg" | "xl"

interface IProps {
    style?: React.CSSProperties
    size?: Size
    thin?: boolean
    overflow?: boolean
}

const pick = (size: Size) => {
    switch (size) {
        case "xs":
            return 576;
        case "sm":
            return 768;
        case "md":
            return 950;
        case "lg":
            return 1200;
        case "xl":
            return 1700;
    }
}

export const Container: React.FC<IProps> = (props) => {
    const { children, style = {}, size = "md", thin = false, overflow = false } = props;

    return (
        <div
            style={{
                ...style,
                padding: thin ? 0 : 8,
                margin: thin ? "0px auto" : "8px auto",
                marginTop: overflow ? 100 : "unset",
                maxWidth: pick(size)
            }}
        >
            {children}
        </div>
    )
}