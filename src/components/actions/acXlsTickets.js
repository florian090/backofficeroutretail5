import axios from 'axios';
import FileDownload from 'react-file-download';
import { acAlertVizibil } from './acAlertVizibil';



export function acXlsTickets(val) {
    // console.log('acXlsTickets', val);


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
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/export_tickets?start=' + startDate + '&finish=' + endDate + '&lottery_name=' + lottery + '&round_id=' + round + '&end_time=' + endTime + '&status=' + status + '&username=' + username + '&agency_name=' + caserie + '&ticket_code=' + ticketCode + '';
        // console.log(url);
        // var url = ''
        axios({
            responseType: 'arraybuffer',
            method: 'GET',
            url: url,
        }).then(function (response) {
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))
            FileDownload(response.data, 'tickets.xls');
        }).catch(function (error) {
            console.log(error);
        });
    }

}


