import React from 'react';

interface NewProps {
    children: React.ReactNode;
}

export function New({children}: NewProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {children}
        </div>
    );
}