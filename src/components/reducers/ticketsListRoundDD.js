export default function (state = null, action) {
    if (action.type === 'TICKETS_LIST_ROUND_DD') {
        var arr = [];
        for (var i = 0; i < action.payload.length; i++) {
            arr.push(action.payload[i].end_time);
        }
        var uniqArr = [...new Set(arr)];
        if (uniqArr.length > 2) {
            state = uniqArr;
        }
    }
    return state;
}

