import axios from 'axios';

export function acAxiosListRetViewRounds(val) {
    // console.log('acAxiosListRetViewRounds', val);

    // var startDate = val.startDate;
    // var endDate = val.endDate;
    // var grup = val.grup;
    // var caserie = val.caserie;

    var startDate = val.startDate;
    var endDate = val.endDate;
    var lottery = val.lottery;
    var hour = val.ora;


    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/view_rounds?start=' + startDate + '&finish=' + endDate + '&lottery_name=' + lottery + '&hour=' + hour + '';
        dispatch({ type: 'LOADING_TABLE', payload: 'ROUNDS' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosListRetViewRounds', response.data);
            if (response.data[0]) {
                dispatch({ type: 'VIEW_ROUNDS_LIST', payload: response.data })
                dispatch({ type: 'VIEW_ROUNDS_LIST_DD', payload: response.data })
                dispatch({ type: 'LOADING_TABLE', payload: false })
                // console.log('load');
            }
            else {
                dispatch({ type: 'TICKETS_LIST', payload: null })
            }

        }).catch(function (error) {
            console.log(error);
        });
    }

}
