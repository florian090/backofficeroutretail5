import axios from 'axios';

import { acAlertVizibil } from './acAlertVizibil';
// import { acPopInfo } from './acPopInfo';
// import { acPopVizibil } from './acPopVizibil';


export function acAxiosPopOddsAdjustement(val) {
    // console.log('acOddsAjustement', val);

    var odds = val.odds;
    var lottery = val.lottery;

    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/change_odds?lottery_name=' + lottery + '&odds=' + odds + '';
        // console.log(url);
        // var url = '';
        axios({
            method: 'GET',
            url: url,
        }).then(function (response) {

            // var filtruData = {
            //     'lottery': val.tableFiltreData.lottery,
            //     'country': val.tableFiltreData.country
            // }
            // dispatch(acAxiosListOddsManagement(filtruData))
            // dispatch(acPopVizibil())
            // dispatch(acPopInfo([['Notification', 'notification'], 'info3', 'info4']))
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))
        }).catch(function (error) {
            console.log(error);
        });
    }

}


