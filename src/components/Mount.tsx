import * as React from 'react';
import "./Mount.css"

export const Mount: React.FC = (props) => {
    const {children} = props;

    return (
        <div className="mount-wrapper">
            <div className="mount-plate"/>
            {children}
        </div>
    )
}