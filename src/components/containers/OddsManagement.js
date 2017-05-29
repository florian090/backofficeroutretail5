import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TableFiltre from './TableFiltre';
import TableParse from './TableParse';

import { acAxiosHistoryOdds } from '../actions/acAxiosHistoryOdds';
import { acAxiosListRetViewOdds } from '../actions/acAxiosListRetViewOdds';
import HistoryParse from './HistoryParse';
class OddsManagement extends React.Component {

    componentDidMount() {
        var filtruData = {
            'lottery': 'all',
            'casa': 'client',
            'country': 'all'
        }
        this.props.acAxiosHistoryOdds();
        this.props.acAxiosListRetViewOdds(filtruData);
    }

    render() {
        // console.log('OddsManagement', this.props);
        if (this.props.listRetViewOddsOverall !== null) {
            return (
                <div>
                    <div className="oddsm-item">
                        <div className="oddsm-item-header">
                            <div className="oddsm-item-header-item card">
                                <img src={`${process.env.PUBLIC_URL}/img/client.jpg`} alt="client" />
                            </div>
                            <div className="oddsm-item-header-item card">
                                <div className="oihi-value">
                                    <div className="oihi-value-top">OFFER</div>
                                    <div className="oihi-value-mid">{this.props.listRetViewOddsOverall[0]}</div>
                                    <div className="oihi-value-bot">active lotteries</div>
                                </div>
                                <div className="oihi-value">
                                    <div className="oihi-value-top">PERCENTAGE</div>
                                    <div className="oihi-value-mid">{this.props.listRetViewOddsOverall[1]}</div>
                                    <div className="oihi-value-bot">overall return</div>
                                </div>
                            </div>
                        </div>
                        <div className="con-panel">
                            <TableFiltre
                                buttons={['']}
                                filtruName='ODDS'
                                mount={false}
                                filtruInfo='acAxiosListRetViewOdds'
                                grupCaserie={this.props.ddOdds}
                                filtruItems={[

                                ]}
                            />
                            <TableParse
                                dataParse={this.props.listRetViewOdds}
                                popUp={['ODDS ADJUSTMENT', 'acAxiosPopOddsAdjustement', 'cyan']}
                                popUpTest={{
                                    'title': 'ODDS ADJUSTMENT',
                                    'action': 'acAxiosPopOddsAdjustement',
                                    'color': 'cyan'
                                }}
                                tableHeaderKey={[
                                    'lottery_name',
                                    'country',
                                    'odds',
                                    'percentage'
                                ]}
                                tableHeaderTh={[
                                    'Lottery',
                                    'Country',
                                    'Odds',
                                    'Percentage'
                                ]}
                            />
                        </div>
                    </div>
                    <HistoryParse
                        title="ODDS HISTORY"
                        dataParse={this.props.historyOdds}
                        tableKey={[
                            'lottery_name',
                            'odds changed from',
                            'percent_old',
                            'to',
                            'percent_new',
                            'arrow',
                            'on',
                            'change_time'
                        ]}
                    />
                </div>
            )
        }
        else {
            return <div></div>

        }
    }
}

function mapStateToProps(state) {
    return {
        listRetViewOdds: state.listRetViewOdds,
        historyOdds: state.historyOdds,
        ddOdds: state.ddOdds,
        listRetViewOddsOverall: state.listRetViewOddsOverall

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acAxiosHistoryOdds: acAxiosHistoryOdds,
        acAxiosListRetViewOdds: acAxiosListRetViewOdds,
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(OddsManagement);
   // <div className="con-panel">

            //
            // </div>