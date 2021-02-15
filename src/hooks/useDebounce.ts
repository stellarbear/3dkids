import * as React from 'react';

export const useDebounce = <T>(timeout = 1500, defaults: T): [T, (update: T) => void, (update: T) => void, () => void] => {
    const [timer] = React.useState<{id: NodeJS.Timer | undefined}>({id: undefined});
    const [state, setState] = React.useState<T>(defaults);

    React.useEffect(() => clearTimer, []);

    const clearTimer = () => {
        if (timer.id) {
            clearTimeout(timer.id);
        }
    };

    const updateState = (update: T) => {
        clearTimer();

        const id = setTimeout(() => {
            setState(update);
        }, timeout);

        timer.id = id;
    };

    const forceUpdateState = (update: T) => {
        clearTimer();
        setState(update);
    };

    return [state, updateState, forceUpdateState, clearTimer];
};
