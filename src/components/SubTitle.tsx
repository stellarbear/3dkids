import * as React from 'react';
import './SubTitle.css'

export const SubTitle: React.FC = ({ children }) => (
    <div className="content__subtitle">
        {children}
    </div>
)