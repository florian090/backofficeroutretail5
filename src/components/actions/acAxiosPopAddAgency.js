import axios from 'axios';
import { acAlertVizibil } from './acAlertVizibil';
import { acAxiosListRetPrintAgencies } from './acAxiosListRetPrintAgencies';


export function acAxiosPopAddAgency(val) {
    console.log('acAxiosPopAddAgency', val);

    var agency = val.agencyName;
    var agencyId = val.idBetshop
    var address = val.address;
    var location = val.location;
    var groupName = val.groupName;
    var allowedIp = val.allowedIp;

    return function (dispatch) {
        var url = 'http://104.155.76.224/retail/client_api/backoffice/public/add_agency?agency_name=' + agency + '&agency_id=' + agencyId + '&address=' + address + '&location=' + location + '&group_name=' + groupName + '&allowed_ip=' + allowedIp + '';
        // console.log(url);
        // var url = "";
        axios({
            method: 'GET',
            url: url,
        }).then(function (response) {
            dispatch(acAlertVizibil({ 'alert': true, 'status': response.data.status }))
            dispatch(acAxiosListRetPrintAgencies());
        }).catch(function (error) {
            console.log(error);
        });
    }

}


