import * as React from 'react';
import './Title.css'

export const Title: React.FC = ({ children }) => (
    <div className="content__title">
        {children}
    </div>
)