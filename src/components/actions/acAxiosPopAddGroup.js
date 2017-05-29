import axios from 'axios';
import { acAlertVizibil } from './acAlertVizibil';

export function acAxiosPopAddGroup(val) {
    // console.log('acAxiosPopAddGroup', val);

    var groupName = val;


    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/add_group?group_name=' + groupName + '';
        // console.log(url);
        // var url = ''
        axios({
            method: 'GET',
            url: url,
        }).then(function (response) {
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))
        }).catch(function (error) {
            console.log(error);
        });
    }

}


