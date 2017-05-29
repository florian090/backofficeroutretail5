import axios from 'axios';

export function acAxiosRetViewClient(val) {

    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/view_client';
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log('acAxiosRetViewClient', response.data);
            if (response.data[0]) {
                dispatch({ type: 'VIEW_CLIENT', payload: response.data })
            }
            else {
                dispatch({ type: 'VIEW_CLIENT', payload: null })
            }

        }).catch(function (error) {
            console.log(error);
        });
    }

}
