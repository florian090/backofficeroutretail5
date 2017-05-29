export default function (state = null, action) {
    if (action.type === 'VIEW_CLIENT') {
        state = action.payload;
    }
    return state;
}

