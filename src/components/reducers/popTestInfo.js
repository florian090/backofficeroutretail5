var defaultVar = {
    title: '',
    action: '',
    color: '',
    value: {},
}
export default function (state = defaultVar, action) {
    if (action.type === 'POP_VAL_TEST') {
        // console.log('********', action.payload);
        state = {
            title: action.payload.title,
            action: action.payload.action,
            color: action.payload.color,
            value: action.payload.value,
        }
    }
    return state;
}
