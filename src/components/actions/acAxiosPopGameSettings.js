import axios from 'axios';
import { acAlertVizibil } from './acAlertVizibil';
export function acAxiosPopGameSettings(val) {
    // console.log('acOddsAjustement', val);

    var currency = val.gameSettings.client_country_unit;
    var minBet = val.gameSettings.min_bet;
    var maxBet = val.gameSettings.max_bet;
    var maxWin = val.gameSettings.max_win;
    var minPrewin = val.gameSettings.min_prewin;
    var betTax = val.gameSettings.bet_tax;
    var winTax = val.gameSettings.win_tax;

    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/change_client_infos?client_monetary_unit=' + currency + '&min_bet=' + minBet + '&max_bet=' + maxBet + '&max_win=' + maxWin + '&min_prewin=' + minPrewin + '&bet_tax=' + betTax + '&win_tax=' + winTax + ''
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


