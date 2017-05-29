
export default function (state = null, action) {
    if (action.type === 'VIEW_ODDS_LIST_DD') {
        var lottery = [];
        var country = [];
        // console.log('-------------', action.payload);
        for (var i = 0; i < action.payload.length; i++) {
            lottery.push(action.payload[i].lottery_name);
            country.push(action.payload[i].country);
        }
        var uniqlottery = [...new Set(lottery)].filter(n => n);
        var uniqcountry = [...new Set(country)].filter(n => n);




        if (uniqlottery.length > 1) {
            state = {
                lottery: uniqlottery,
                country: uniqcountry
            }
        }
        // console.log(state);
    }
    return state;
}

