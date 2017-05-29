
export default function (state = null, action) {
    if (action.type === 'VIEW_PRINT_AGENCIES_LIST') {
        state = action.payload;
    }
    return state;
}

