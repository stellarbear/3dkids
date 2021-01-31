import * as React from "react";

export interface ICellProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    s?: number;
    p?: number | [number, number];
    m?: number | [number, number];

    wrap?: boolean;
    fullWidth?: boolean;
    style?: React.CSSProperties;

    align?: React.CSSProperties["alignItems"];
    justify?: React.CSSProperties["justifyContent"];
    direction?: React.CSSProperties["flexDirection"];
}

export const Cell: React.FC<ICellProps> = (props) => {
    const {
        p, m, s,
        wrap = false,
        fullWidth = false,
        direction,
        style = {},
        children,
        align,
        justify,
        ...rest

    } = props;

    const renderChildren = () => {
        if (!children) {
            return null;
        }

        const length = React.Children.count(children);

        return (
            React.Children.map(children, (child, index) => React.isValidElement(child) && (
                <>
                    {child}
                    {s && (index < length - 1) && <div style={{height: s, width: s}}/>}
                </>
            )));
    };

    return (
        <div
            {...rest}
            style={{
                width: fullWidth ? "100%" : undefined,
                display: "flex",
                alignItems: align,
                justifyContent: justify,
                flexWrap: wrap ? "wrap" : undefined,
                flexDirection: direction,
                margin: m && (Array.isArray(m)
                    ? `${m[0]}px ${m[1]}px` : m),
                padding: p && (Array.isArray(p)
                    ? `${p[0]}px ${p[1]}px` : p),
                ...style,
            }}
        >
            {renderChildren()}
        </div>
    );
};
