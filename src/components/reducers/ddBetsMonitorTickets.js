
export default function (state = null, action) {
    if (action.type === 'VIEW_TICKETS_LIST_DD') {
        var lottery = [];
        var caserie = [];
        var round = [];
        var agency = [];
        var worker = [];
        for (var i = 0; i < action.payload.length; i++) {
            lottery.push(action.payload[i].lottery_name);
            caserie.push(action.payload[i].agency);
            round.push(action.payload[i].round);
            agency.push(action.payload[i].agency);
            worker.push(action.payload[i].worker);
        }
        var uniqlottery = [...new Set(lottery)].filter(n => n);
        var uniqcaserie = [...new Set(caserie)].filter(n => n);
        var uniqround = [...new Set(round)].filter(n => n);
        var uniqagency = [...new Set(agency)].filter(n => n);
        var uniqworker = [...new Set(worker)].filter(n => n);



        // state = {
        //     lottery: uniqlottery,
        //     caserie: uniqcaserie,
        //     round: uniqround,
        //     agency: uniqagency,
        //     worker: uniqworker,
        // }
        if (uniqround.length > 2) {
            state = {
                lottery: uniqlottery,
                caserie: uniqcaserie,
                round: uniqround,
                agency: uniqagency,
                worker: uniqworker,
            }
        }
        // console.log(action.payload);
    }
    return state;
}

