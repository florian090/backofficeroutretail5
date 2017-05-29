import axios from 'axios';

export function acAxiosListRetViewTickets(val) {
    // console.log('acAxiosListRetViewTickets', val);

    // var startDate = val.startDate;
    // var endDate = val.endDate;
    // var grup = val.grup;
    // var caserie = val.caserie;

    var startDate = val.startDate;
    var endDate = val.endDate;
    var lottery = val.lottery;
    var round = 'all';
    var endTime = val.round;
    var status = val.status;
    var username = val.username;
    var caserie = val.agency;
    var ticketCode = val.ticketCode;

    if (val.ticketCode === '') {
        ticketCode = 'all'
    }


    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/view_tickets?start=' + startDate + '&finish=' + endDate + '&lottery_name=' + lottery + '&round_id=' + round + '&end_time=' + endTime + '&status=' + status + '&username=' + username + '&agency_name=' + caserie + '&ticket_code=' + ticketCode + '';
        dispatch({ type: 'LOADING_TABLE', payload: 'TICKETS' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosListRetViewTickets', response.data);
            if (response.data[0]) {
                dispatch({ type: 'VIEW_TICKETS_LIST', payload: response.data })
                dispatch({ type: 'VIEW_TICKETS_LIST_DD', payload: response.data })
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
