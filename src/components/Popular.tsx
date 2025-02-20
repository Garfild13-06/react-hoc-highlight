import React from 'react';

interface PopularProps {
    children: React.ReactNode;
}

export function Popular({children}: PopularProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {children}
        </div>
    );
}