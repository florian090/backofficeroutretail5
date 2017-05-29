export default function (state = null, action) {
    if (action.type === 'VIEW_USERS_LIST') {
        state = action.payload;
    }
    return state;
}

