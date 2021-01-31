import * as React from 'react';

type Size = "xs" | "sm" | "md" | "lg"

interface IProps {
    style?: React.CSSProperties
    size?: Size
    thin?: boolean
}

const pick = (size: Size) => {
    switch (size) {
        case "xs":
            return 576;
        case "sm":
            return 768;
        case "md":
            return 992;
        case "lg":
            return 1200;
    }
}

export const Container: React.FC<IProps> = (props) => {
    const { children, style = {}, size = "md", thin = false } = props;

    return (
        <div
            style={{
                ...style,
                padding: thin ? 0 : 8,
                margin: thin ? "0px auto" : "8px auto",
                maxWidth: pick(size)
            }}
        >
            {children}
        </div>
    )
}