import axios from 'axios';

export function acAxiosListRetPrintGroups() {

    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/print_groups';
        // dispatch({ type: 'LOADING_TABLE', payload: 'USERS' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosListRetPrintAgencies', response.data);
            if (response.data.constructor === Array) {
                dispatch({ type: 'VIEW_PRINT_GROUPS_LIST', payload: response.data })
                // dispatch({ type: 'VIEW_PRINT_AGENCIES_LIST_DD', payload: response.data })
                // dispatch({ type: 'LOADING_USERS', payload: false })
                // console.log('load');
            }
            else {
                dispatch({ type: 'VIEW_PRINT_GROUPS_LIST', payload: null })
            }

        }).catch(function (error) {
            console.log(error);
        });
    }

}
