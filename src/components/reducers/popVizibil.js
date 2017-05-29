export default function (state = false, action) {
    if (action.type === 'POP_VIZIBIL') {
        state = !state;
    }
    return state;
}
