import * as React from 'react';
import './Label.css'

interface IProps {
    asHtml?: boolean
    style?: React.CSSProperties
}

export const Label: React.FC<IProps> = ({ children, asHtml, style = {} }) => (
    <div className="content__label"
        style={style}
        dangerouslySetInnerHTML={asHtml ? { __html: String(children) } : undefined}>
        {asHtml ? null : children}
    </div>
)