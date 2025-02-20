import React from 'react';
import {New} from './New';
import {Popular} from './Popular';

function withHighlight<T extends { views: number }>(
    WrappedComponent: React.ComponentType<T>
): React.FC<T> {
    return function EnhancedComponent(props: T) {
        const {views} = props;

        if (views >= 1000) {
            return (
                <Popular>
                    <WrappedComponent {...props} />
                </Popular>
            );
        } else if (views < 100) {
            return (
                <New>
                    <WrappedComponent {...props} />
                </New>
            );
        }

        return <WrappedComponent {...props} />;
    };
}

export default withHighlight;