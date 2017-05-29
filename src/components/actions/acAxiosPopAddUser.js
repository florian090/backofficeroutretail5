import axios from 'axios';
import { acAlertVizibil } from './acAlertVizibil';
import { acAxiosListRetPrintUsers } from './acAxiosListRetPrintUsers';


export function acAxiosPopAddUser(val) {
    // console.log('acOddsAjustement', val);

    var username = val.username;
    var password = val.password;
    var retypePassword = val.retypePassword;
    var firstname = val.firstName;
    var lastname = val.lastName;
    var agency = val.agencyName;
    var userType = 0;
    var status = 'active';

    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/add_user?username=' + username + '&password=' + password + '&retype_password=' + retypePassword + '&firstname=' + firstname + '&lastname=' + lastname + '&agency_name=' + agency + '&user_type=' + userType + '&status=' + status + '';
        // console.log(url);
        // var url = ''
        axios({
            method: 'GET',
            url: url,
        }).then(function (response) {
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))
            dispatch(acAxiosListRetPrintUsers());
        }).catch(function (error) {
            console.log(error);
        });
    }

}


