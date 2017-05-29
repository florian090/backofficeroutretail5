export default function (state = null, action) {
    if (action.type === 'VIEW_PRINT_GROUPS_LIST') {
        state = action.payload;
    }
    return state;
}
