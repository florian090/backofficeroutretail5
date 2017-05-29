import axios from 'axios';

export function acAxiosListRetAgenciesReport(val) {
    // console.log('acAxiosListRetAgenciesReport', val);

    var startDate = val.startDate;
    var endDate = val.endDate;
    var grup = val.grup;
    var caserie = val.agency;

    // var startDate = '2017/05/1';
    // var endDate = '2017/05/10';
    // var grup = 'All';
    // var caserie = 'All';


    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/agencies_report?start=' + startDate + '&finish=' + endDate + '&group_name=' + grup + '&agency_name=' + caserie + '';
        dispatch({ type: 'LOADING_TABLE', payload: 'AGENCIES' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosListRetAgenciesReport', response.data);
            if (response.data[0]) {
                dispatch({ type: 'VIEW_AGENCIES_LIST', payload: response.data })
                dispatch({ type: 'VIEW_AGENCIES_LIST_DD', payload: response.data })
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
