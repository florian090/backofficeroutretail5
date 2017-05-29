import axios from 'axios';
import FileDownload from 'react-file-download';
import { acAlertVizibil } from './acAlertVizibil';



export function acXlsRounds(val) {
    // console.log('acXlsTickets', val);

    var startDate = val.startDate;
    var endDate = val.endDate;
    var lottery = val.lottery;
    var hour = val.ora;

    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/export_rounds?start=' + startDate + '&finish=' + endDate + '&lottery_name=' + lottery + '&hour=' + hour + '';
        // var url = 'http://104.155.76.224/retail/client_api/backoffice/public/export_tickets?start=2017/05/08&finish=2017/05/24&lottery_name=all&round_id=all&end_time=all&status=all&username=all&agency_name=Favbet&ticket_code=all'
        // console.log(url);
        // var url = ''
        axios({
            responseType: 'arraybuffer',
            method: 'GET',
            url: url,
        }).then(function (response) {
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))
            // console.log(response.data);
            FileDownload(response.data, 'rounds.xls');
        }).catch(function (error) {
            console.log(error);
        });
    }

}


