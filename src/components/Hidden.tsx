import * as React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';

type Size = "xs" | "sm" | "md" | "lg"

interface IPropsLess {
    less: Size
}
interface IPropsMore {
    more: Size
}
type IProps = IPropsLess | IPropsMore

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

export const Hidden: React.FC<IProps> = (props) => {
    const { children } = props;
    const [size] = useWindowSize();

    if ("less" in props) {
        if (size.width < pick(props.less)) {
            return null;
        }
    } else if ("more" in props) {
        if (size.width > pick(props.more)) {
            return null;
        }
    }

    return (
        <>
            {children}
        </>
    )
}