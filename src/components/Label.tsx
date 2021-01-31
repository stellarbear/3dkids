import * as React from 'react';
import './Label.css'

export const Label: React.FC = ({ children }) => (
    <div className="content__label">
        {children}
    </div>
)