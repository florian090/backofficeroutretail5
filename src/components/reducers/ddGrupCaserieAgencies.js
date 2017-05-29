
export default function (state = null, action) {
    if (action.type === 'VIEW_AGENCIES_LIST_DD') {
        var grup = [];
        var agency = [];
        // console.log('-------------', action.payload);
        for (var i = 0; i < action.payload.length; i++) {
            grup.push(action.payload[i].group);
            agency.push(action.payload[i].agency_name);
        }
        var uniqGrup = [...new Set(grup)].filter(n => n);
        var uniqagency = [...new Set(agency)].filter(n => n);

        if (uniqagency.length > 1) {
            state = {
                grup: uniqGrup,
                agency: uniqagency
            }
        }
        // console.log(action.payload);
    }
    return state;
}

