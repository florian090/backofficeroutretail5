import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TableFiltre from './TableFiltre';
import TableParse from './TableParse';

class ReportsCasa extends React.Component {
    render() {
        // console.log('Reports', this.props);
        return (
            <div className="con-panel">

                <TableFiltre
                    buttons={['reload']}
                    filtruName='USERS'
                    filtruInfo='acAxiosListRetViewUsers'
                    grupCaserie={this.props.ddGrupCaserieUsers}
                    filtruItems={[
                        'dataRange',
                        'username'
                    ]}
                />
                <TableParse
                    dataParse={this.props.listRepViewUsers}
                    tableHeaderKey={[
                        'username',
                        'start_time',
                        'end_time',
                        'agency_id',
                        'agency_name',
                        'group_name',
                        'tickets_placed',
                        'tickets_won',
                        'money_in',
                        'money_out',
                        'money_left',
                        'proc_win'
                    ]}
                    tableHeaderTh={[
                        'Username',
                        'Login Date',
                        'logout Date',
                        'Agency Id',
                        'Agency Name',
                        'Group',
                        'Played tickets',
                        'Won tickets',
                        'Money in',
                        'Money out',
                        'Money left',
                        'Percentage'
                    ]}
                />


                <TableFiltre
                    buttons={['reload']}
                    filtruName='AGENCIES'
                    filtruInfo='acAxiosListRetAgenciesReport'
                    grupCaserie={this.props.ddGrupCaserieAgencies}
                    filtruItems={[
                        'dataRange',
                    ]}
                />
                <TableParse
                    dataParse={this.props.listRetAgenciesReport}
                    tableHeaderKey={[
                        'agency_id',
                        'agency_name',
                        'ip',
                        'address',
                        'group',
                        'tickets_placed',
                        'tickets_won',
                        'money_in',
                        'money_out',
                        'money_left',
                        'average_bet',
                        'percentage'
                    ]}
                    tableHeaderTh={[
                        'Agency Id',
                        'Agency Name',
                        'IP',
                        'Adress',
                        'Group',
                        'Played Tickets',
                        'Won Tickets',
                        'Money in',
                        'Money out',
                        'Money left',
                        'Avg.Bet',
                        'Percentage'
                    ]}
                />
            </div>



        )
    }
}

function mapStateToProps(state) {
    return {
        listRepViewUsers: state.listRepViewUsers,
        listRetAgenciesReport: state.listRetAgenciesReport,
        // usersList: state.usersList
        ddGrupCaserieUsers: state.ddGrupCaserieUsers,
        ddGrupCaserieAgencies: state.ddGrupCaserieAgencies
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(ReportsCasa);