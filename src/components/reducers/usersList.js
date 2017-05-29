export default function (state = null, action) {
    if (action.type === 'USERS_LIST') {
        state = action.payload;
    }
    return state;
}

