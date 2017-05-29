import axios from 'axios';

export function acAxiosClientSettings(val) {
    // console.log(val);

    return function (dispatch) {
        var url = 'http://104.155.76.224/main_api/backoffice/public/view_client?client_name=' + val + '';
        // console.log(url);
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            // console.log(response.data);
            dispatch({ type: 'USER_SETTINGS', payload: response.data })
        }).catch(function (error) {
            console.log(error);
        });
    }

}


