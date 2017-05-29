import axios from 'axios';

export function acAxiosListRetPrintAgencies(val) {
    // console.log('acAxiosListRetPrintAgencies', val);

    // var startDate = val.startDate;
    // var endDate = val.endDate;
    // var grup = val.grup;
    // var caserie = val.caserie;
    // var lottery = val.lottery;
    // var country = val.country;


    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/print_agencies';
        // dispatch({ type: 'LOADING_TABLE', payload: 'USERS' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosListRetPrintAgencies', response.data);
            if (response.data[0]) {
                dispatch({ type: 'VIEW_PRINT_AGENCIES_LIST', payload: response.data })
                dispatch({ type: 'VIEW_PRINT_AGENCIES_LIST_DD', payload: response.data })
                // dispatch({ type: 'LOADING_USERS', payload: false })
                // console.log('load');
            }
            else {
                dispatch({ type: 'VIEW_PRINT_AGENCIES_LIST', payload: null })
            }

        }).catch(function (error) {
            console.log(error);
        });
    }

}
