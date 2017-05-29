import axios from 'axios';

export function acAxiosListRetViewUsers(val) {
    // console.log('acAxiosListRetViewUsers', val);

    var startDate = val.startDate;
    var endDate = val.endDate;
    var grup = val.grup;
    var caserie = val.agency;
    var username = val.username;

    // var startDate = '2017/05/1';
    // var endDate = '2017/05/10';
    // var grup = 'All';
    // var caserie = 'All';
    // var username = 'All';


    return function (dispatch) {

        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/view_users?start=' + startDate + '&finish=' + endDate + '&group_name=' + grup + '&agency_name=' + caserie + '&username=' + username + '';
        dispatch({ type: 'LOADING_TABLE', payload: 'USERS' })
        // console.log(url)
        axios({
            method: 'GET',
            url: url,

        }).then(function (response) {
            if (response.data[0]) {
                dispatch({ type: 'VIEW_USERS_LIST', payload: response.data })
                dispatch({ type: 'VIEW_USERS_LIST_GRUP_DD', payload: response.data })
                dispatch({ type: 'LOADING_TABLE', payload: false })
                // console.log('load');
            }
            else {
                dispatch({ type: 'VIEW_USERS_LIST', payload: null })
            }

        }).catch(function (error) {
            console.log(error);
        });
    }

}


