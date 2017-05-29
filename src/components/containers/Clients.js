import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { acAxiosClientSettings } from '../actions/acAxiosClientSettings';

import { acAxiosRetViewClient } from '../actions/acAxiosRetViewClient';


import TableFiltre from './TableFiltre';
import TableParse from './TableParse';

class ClientsCasa extends React.Component {

    componentDidMount() {
        this.props.acAxiosClientSettings('client');
        this.props.acAxiosRetViewClient();
    }

    render() {
        if (this.props.retViewClient !== null) {
            // console.log('ClientsCasa', this.props);
            return (
                <div className="con-user-casa">
                    <div className="user-casa-top">
                        <div className="user-casa-top-logo card">
                            <img src={`${process.env.PUBLIC_URL}/img/client.jpg`} alt="client" />
                        </div>
                        <div className="user-casa-top-gamesis">
                            <div className="con-panel">
                                <div className="panel-header">
                                    <div className="panel-header-top blue">
                                        <div className="left">GAME SETTINGS</div>
                                    </div>
                                </div>
                                <TableParse
                                    casa={this.props.match.params.casa}
                                    dataParse={this.props.userSettings}
                                    popUp={['GAME SETTINGS', 'acAxiosPopGameSettings', 'blue']}
                                    popUpTest={{
                                        'title': 'GAME SETTINGS',
                                        'action': 'acAxiosPopGameSettings',
                                        'color': 'cyan'
                                    }}
                                    tableHeaderKey={[
                                        'client_country',
                                        'client_country_unit',
                                        'min_bet',
                                        'max_bet',
                                        'min_prewin',
                                        'max_win',
                                        'bet_tax',
                                        'win_tax'
                                    ]}
                                    tableHeaderTh={[
                                        'Client Country',
                                        'Currency',
                                        'Minimum Bet',
                                        'Maximum Bet',
                                        'Minimum Prewin',
                                        'Minimum Win',
                                        'Bet Tax',
                                        'Win Tax'
                                    ]}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="con-panel float-l">

                        <TableFiltre
                            buttons={['addUser', 'down', 'reload']}
                            filtruName='USER'
                            filtruInfo='acAxiosListRetPrintUsers'
                            // grupCaserie={this.props.ddGrupCaserieUsers}
                            filtruItems={[

                            ]}
                        />
                        <TableParse
                            dataParse={this.props.listRetPrintUsers}
                            tableHeaderKey={[
                                'username',
                                'first_name',
                                'last_name',
                                'user_type',
                                'register_date',
                                'status',
                            ]}
                            tableHeaderTh={[
                                'Username',
                                'First name',
                                'Last name',
                                'User type',
                                'Created',
                                'Status',
                            ]}
                        />

                        <TableFiltre
                            buttons={['addGroup', 'addBetshop', 'down', 'reload']}
                            filtruName='BETSHOP '
                            filtruInfo='acAxiosListRetPrintAgencies'
                            // grupCaserie={this.props.ddGrupCaserieUsers}
                            filtruItems={[

                            ]}
                        />
                        <TableParse
                            dataParse={this.props.listRetPrintAgencies}
                            tableHeaderKey={[
                                'id_betshop',
                                'address',
                                'group',
                                'created',
                                'status',
                            ]}
                            tableHeaderTh={[
                                'Id betshop',
                                'Address',
                                'Group',
                                'Created',
                                'Status',
                            ]}
                        />

                    </div>
                </div>
            )
        }
        else {
            return <div>Loading</div>
        }
    }

}

function mapStateToProps(state) {
    return {
        userSettings: state.userSettings,
        usersList: state.usersList,
        retViewClient: state.retViewClient,
        listRetPrintUsers: state.listRetPrintUsers,
        listRetPrintAgencies: state.listRetPrintAgencies
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acAxiosClientSettings: acAxiosClientSettings,

        acAxiosRetViewClient: acAxiosRetViewClient,
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(ClientsCasa);
