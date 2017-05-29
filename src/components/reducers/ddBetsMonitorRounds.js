
export default function (state = null, action) {
    if (action.type === 'VIEW_ROUNDS_LIST_DD') {
        var lottery = [];
        // var round = [];
        // console.log('-------------', action.payload);
        for (var i = 0; i < action.payload.length; i++) {
            lottery.push(action.payload[i].lottery);
            // round.push(action.payload[i].round_time);
        }
        var uniqlottery = [...new Set(lottery)].filter(n => n);
        // var uniqround = [...new Set(round)].filter(n => n);

        // console.log(uniqlottery.length);
        if (uniqlottery.length > 1) {
            state = {
                lottery: uniqlottery,
                // round: uniqround
            }
        }
        // console.log(action.payload);
    }
    return state;
}

