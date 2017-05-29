var defaultVar = {
    'alert': false,
    'status': 'succes'
}
export default function (state = defaultVar, action) {
    if (action.type === 'ALERT_VIZIBIL') {
        // console.log(action.payload);
        if (!action.payload.status) {
            action.payload.status = state.status;
        }
        state = {
            'alert': action.payload.alert,
            'status': action.payload.status
        }
    }
    return state;
}
