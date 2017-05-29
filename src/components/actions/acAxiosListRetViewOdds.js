import axios from 'axios';

export function acAxiosListRetViewOdds(val) {
    // console.log('acAxiosListRetViewOdds', val);

    // var startDate = val.startDate;
    // var endDate = val.endDate;
    // var grup = val.grup;
    // var caserie = val.caserie;
    var lottery = val.lottery;
    var country = val.country;


    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/view_odds?lottery_name=' + lottery + '&country=' + country + '';
        dispatch({ type: 'LOADING_TABLE', payload: 'ODDS' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosListRetViewOdds', response.data);
            if (response.data.lotteries[0]) {
                dispatch({ type: 'VIEW_ODDS_OVERALL', payload: [response.data.total_active, response.data.overall_percentage] })
                dispatch({ type: 'VIEW_ODDS_LIST', payload: response.data.lotteries })
                dispatch({ type: 'VIEW_ODDS_LIST_DD', payload: response.data.lotteries })
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
