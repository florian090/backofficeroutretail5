import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TableFiltre from './TableFiltre';
import TableParse from './TableParse.js';

class BetsMonitorCasa extends React.Component {

    constructor() {
        super();
        this.state = {
            limit: 200,
        };
    }
    loadMore() {
        this.setState({ limit: this.state.limit + 200 });
    }
    roundsList() {
        if (this.props.ticketsListRoundDD !== null) {
            return this.props.ticketsListRoundDD
        }
    }
    version() {
        var casa = ''
        if (this.props.match.params.casa) {
            casa = this.props.match.params.casa;
        }
        else {
            casa = 'client'
        }
        return casa;
    }
    render() {
        // console.log('BetsMonitorCasa', this.props);
        return (
            <div className="con-panel">
                <div className="panel-header">
                    <div className="panel-header-top">
                        <div className="left">BETS MONITOR</div>
                    </div>
                </div>

                <TableFiltre
                    casa={this.props.match.params.casa}
                    buttons={['xls', 'print', 'down', 'reload']}
                    filtruName='TICKETS'
                    filtruInfo='acAxiosListRetViewTickets'
                    grupCaserie={this.props.ddBetsMonitorTickets}
                    filtruItems={[
                        'dataRange',
                        'status8',
                        'ticketCode'
                    ]}
                />
                <TableParse
                    dataParse={this.props.listRetViewTickets}
                    tableHeaderKey={[
                        'ticket_code',
                        'data_played',
                        'print_status',
                        'agency',
                        'worker',
                        'lottery_name',
                        'round',
                        'numbers',
                        'systems',
                        'bet',
                        'possible_win',
                        'win',
                        'status',
                        'paid_date',
                        'paid_agency',
                        'paid_worker',
                    ]}
                    tableHeaderTh={[
                        'Ticket Code',
                        'Data Played',
                        'Print Status',
                        'Agency',
                        'Worker',
                        'Lottery',
                        'Round',
                        'Numbers',
                        'Systems',
                        'Bet',
                        'Possible Win',
                        'Win',
                        'Status',
                        'Paid Date',
                        'Paid Agency',
                        'Paid Worker'
                    ]}
                />


                <TableFiltre
                    casa={this.props.match.params.casa}
                    buttons={['xls', 'print', 'down', 'reload']}
                    filtruName='ROUNDS'
                    filtruInfo='acAxiosListRetViewRounds'
                    grupCaserie={this.props.ddBetsMonitorRounds}
                    filtruItems={[
                        'dataRange',
                        'ora'
                    ]}
                />
                <TableParse
                    dataParse={this.props.listRetViewRounds}
                    tableHeaderKey={[
                        'round_id',
                        'round_time',
                        'lottery',
                        'extracted_numbers',
                        'tickets_played',
                        'tickets_pending',
                        'tickets_lost',
                        'tickets_won',
                        'tickets_paidout',
                        'money_in',
                        'money_out',
                        'average_bet',
                        'money_left',
                    ]}
                    tableHeaderTh={[
                        'RoundId',
                        'Round Time',
                        'Lottery',
                        'Extracted Numbers',
                        'Tickets Played',
                        'Tickets Pending',
                        'Tickets Lost',
                        'Tickets Won',
                        'Tickets Paidout',
                        'Money In',
                        'Money On',
                        'Average Bet',
                        'Money Left',

                    ]}
                />
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        listRetViewTickets: state.listRetViewTickets,
        listRetViewRounds: state.listRetViewRounds,

        ddBetsMonitorTickets: state.ddBetsMonitorTickets,
        ddBetsMonitorRounds: state.ddBetsMonitorRounds
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(BetsMonitorCasa);
