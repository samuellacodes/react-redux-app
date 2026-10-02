import {
    INCREMENT,
    DECREMENT,
    RESET,
} from "../actions/counterActions";

export interface CounterState {
    value: number;
}

export type CounterAction =
    | { type: typeof INCREMENT }
    | { type: typeof DECREMENT }
    | { type: typeof RESET };

const initialState: CounterState = {
    value: 0,
};

export const counterReducer = (
    state: CounterState = initialState,
    action: CounterAction
): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return { value:state.value + 1};

        case DECREMENT:
            return { value: state.value - 1};

        case RESET:
            return { value: 0 };

        default:
            return state;
    }
};