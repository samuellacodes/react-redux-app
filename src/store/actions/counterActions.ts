export const INCREMENT = 'INCREMENT' as const;
export const DECREMENT = 'DECREMENT' as const;
export const RESET = 'RESET' as const;

export interface IncrementAction {
    type: typeof INCREMENT;
}

export interface DecrementAction {
    type: typeof DECREMENT;
}

export interface ResetAction {
    type: typeof RESET;
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;

export const increment = (): CounterAction => ({
    type: INCREMENT,
});

export const decrement = (): CounterAction => ({
    type: DECREMENT,
});

export const reset = (): CounterAction => ({
    type: RESET,
});