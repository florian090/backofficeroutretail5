import axios from 'axios';

export function acLogIn(user, pass) {
    // console.log(user, pass);

    return function (dispatch) {
        axios({
            method: 'GET',
            url: 'http://104.155.76.224/retail/client_api/backoffice/public/login?username=' + user + '&password=' + pass + '',
            // url: 'http://104.155.76.224/main_api/backoffice/public/login?username=user&password=1234',
        }).then(function (response) {
            // console.log('acListaLoterii', response.data);
            if (response.data.status !== 'error') {
                dispatch({ type: 'LOGED_IN', payload: true })
            }
            else {
                dispatch({ type: 'LOGED_IN', payload: false })
            }
            // dispatch({ type: 'LOGED_IN', payload: response.data })
        }).catch(function (error) {
            console.log(error);
        });
    }

}


