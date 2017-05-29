import axios from 'axios';

export function acAxiosHistoryOdds(val) {
    // console.log(val);

    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/odds_history';
        // console.log(url);
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log(response.data);

            dispatch({ type: 'HISTORY_ODDS', payload: response.data })
        }).catch(function (error) {
            console.log(error);
        });
    }

}


