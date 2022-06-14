export const increment = (num = 1) => {
    return {
        type: 'INCREMENT',
        payload: num
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const logInOut = () => {
    return {
        type: 'SIGN_IN_OR_OUT'
    }
}