
export default function (state = null, action) {
    if (action.type === 'VIEW_PRINT_USERS_LIST') {
        state = action.payload;
    }
    return state;
}

