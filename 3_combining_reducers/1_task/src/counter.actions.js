export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';
export const RESET = 'COUNTER/RESET';

export const counterIncrement = () => ({ type: INCREMENT });
export const counterDecrement = () => ({ type: DECREMENT });
export const counterReset = () => ({ type: RESET });