import axios from 'axios';
import { acAlertVizibil } from './acAlertVizibil';



export function acXlsRounds(val) {
    // console.log('acXlsTickets', val);

    var startDate = val.startDate;
    var endDate = val.endDate;
    var lottery = val.lottery;
    var hour = val.ora;

    return function (dispatch) {
        var url = '104.155.76.224/retail/client_api/backoffice/public/export_rounds?start=' + startDate + '&finish=' + endDate + '&lottery_name=' + lottery + '&hour=' + hour + '';
        // console.log(url);
        // var url = ''
        axios({
            method: 'GET',
            url: url,
        }).then(function (response) {
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))

        }).catch(function (error) {
            console.log(error);
        });
    }

}


