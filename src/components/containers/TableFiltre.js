import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { acTableFiltreData } from '../actions/acTableFiltreData';


import { acAxiosListRetViewUsers } from '../actions/acAxiosListRetViewUsers';
import { acAxiosListRetAgenciesReport } from '../actions/acAxiosListRetAgenciesReport';
import { acAxiosListRetViewTickets } from '../actions/acAxiosListRetViewTickets';
import { acAxiosListRetViewRounds } from '../actions/acAxiosListRetViewRounds';
import { acAxiosListRetViewOdds } from '../actions/acAxiosListRetViewOdds';
import { acAxiosListRetPrintUsers } from '../actions/acAxiosListRetPrintUsers';
import { acAxiosListRetPrintAgencies } from '../actions/acAxiosListRetPrintAgencies';
import { acAxiosListRetPrintGroups } from '../actions/acAxiosListRetPrintGroups';

import { acPopVizibil } from '../actions/acPopVizibil';

import { acPopTestVal } from '../actions/acPopTestVal';
import { acXlsTickets } from '../actions/acXlsTickets';
import { acXlsRounds } from '../actions/acXlsRounds';


const constant = {
    'startDate': moment().format('YYYY/MM/DD'),
    'endDate': moment().format('YYYY/MM/DD'),
    'lottery': 'all',
    'round': 'all',
    'grup': 'all',
    'agency': 'all',
    'endTime': 'all',
    'ticketCode': 'all',
    'status': 'all',
    'username': 'all',
    'country': 'all',
    'ora': 'all',
    'odds': 'all'
}

class TableFiltre extends React.Component {

    constructor() {
        super();
        this.state = {
            startDate: moment(),
            endDate: moment(),
            lottery: 'all',
            round: 'all',
            status: 'all',
            username: 'all',
            country: 'all',
            usernameInput: '',
            grup: 'all',
            agency: 'all',
            endTime: 'all',
            ticketCode: '',
            ora: 'all',
            odds: 'all',
            hide: '',
            print: false,
        };
    }
    componentWillMount() {
        if (this.props.hide === true) {
            this.setState({ hide: 'hide' });
        }
    }
    componentDidMount() {
        if (this.props.mount !== false) {
            this.props[this.props.filtruInfo](constant);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.casa !== this.props.casa) {
            this.props[this.props.filtruInfo](constant);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.print === true) {
            window.print()
            this.setState({ print: false });
        }

    }
    reload() {
        this.props[this.props.filtruInfo](constant);
    }
    hide() {
        if (this.state.hide === 'hide') {
            this.setState({ hide: '' })
        }
        else {
            this.setState({ hide: 'hide' })
        }
    }
    sendFiltre(key, val) {
        var startDate = this.state.startDate.format("YYYY/MM/DD");
        var endDate = this.state.endDate.format("YYYY/MM/DD");
        var lottery = this.state.lottery.replace(/ /g, "_");
        var round = this.state.round.replace(/ /g, "_");
        var grup = this.state.grup.replace(/ /g, "_");
        var agency = this.state.agency.replace(/ /g, "_");
        var endTime = this.state.endTime.replace(/ /g, "_");
        var ticketCode = this.state.ticketCode.replace(/ /g, "_");
        var casa = this.props.casa;
        var status = this.state.status;
        var username = this.state.username;
        var country = this.state.country;
        var ora = this.state.ora;
        var odds = this.state.odds;

        if (key === 'startDate') { startDate = val; }
        if (key === 'endDate') { endDate = val; }
        if (key === 'lottery') { lottery = val.replace(/ /g, "_"); }
        if (key === 'round') { round = val.replace(/ /g, "_"); }
        if (key === 'grup') { grup = val.replace(/ /g, "_"); }
        if (key === 'agency') { agency = val.replace(/ /g, "_"); }
        if (key === 'endTime') { endTime = val.replace(/ /g, "_"); }
        if (key === 'ticketCode') { ticketCode = val.replace(/ /g, "_"); }
        if (key === 'casa') { casa = val; }
        if (key === 'status') { status = val; }
        if (key === 'username') { username = val; }
        if (key === 'country') { country = val; }
        if (key === 'ora') { ora = val; }
        if (key === 'odds') { odds = val; }
        var filtruData = {
            'startDate': startDate,
            'endDate': endDate,
            'lottery': lottery,
            'round': round,
            'grup': grup,
            'agency': agency,
            'endTime': endTime,
            'ticketCode': ticketCode,
            'casa': casa,
            'status': status,
            'username': username,
            'country': country,
            'ora': ora,
            'odds': odds,

        }

        this.props[this.props.filtruInfo](filtruData);
        this.props.acTableFiltreData(filtruData)
        // this.props.acFiltreData([startDate, endDate, lottery, round, casa, status, username, country]);
        // if (this.props.filtruInfo2) {
        //     this.props[this.props.filtruInfo2]([startDate, endDate, lottery, round, casa, status, username, country]);
        // }

    }
    print() {
        this.setState({ print: true });

    }
    printClass() {
        if (this.state.print === true) {
            return 'print';
        } else {
            return ''
        }
    }
    xls(val) {
        if (this.props.filtruName === 'TICKETS') {
            this.props.acXlsTickets(val);
        }
        if (this.props.filtruName === 'ROUNDS') {
            this.props.acXlsRounds(val);
        }
    }
    buttonsFunction(val) {
        var filtruData = {
            startDate: this.state.startDate.format("YYYY/MM/DD"),
            endDate: this.state.endDate.format("YYYY/MM/DD"),
            lottery: this.state.lottery.replace(/ /g, "_"),
            round: this.state.round.replace(/ /g, "_"),
            grup: this.state.grup.replace(/ /g, "_"),
            agency: this.state.agency.replace(/ /g, "_"),
            endTime: this.state.endTime.replace(/ /g, "_"),
            ticketCode: this.state.ticketCode.replace(/ /g, "_"),
            status: this.state.status,
            username: this.state.username,
            country: this.state.country,
            ora: this.state.ora,
            odds: this.state.odds,
        }
        if (val === 'down') {
            if (this.state.hide === 'hide') {
                this.setState({ hide: '' })
            }
            else {
                this.setState({ hide: 'hide' })
            }
        }
        if (val === 'reload') {

            this.props[this.props.filtruInfo](filtruData);
        }
        if (val === 'print') {
            this.print();
        }
        if (val === 'xls') {
            this.xls(filtruData);
        }
        if (val === 'addUser') {
            this.popUp(['ADD USER', 'acAxiosPopAddUser']);
        }
        if (val === 'addBetshop') {
            this.props.acAxiosListRetPrintGroups();
            this.popUp(['ADD BETSHOP', 'acAxiosPopAddAgency']);
        }
        if (val === 'addGroup') {
            this.popUp(['ADD GROUP', 'acAxiosPopAddGroup']);
        }
    }
    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
        this.sendFiltre('startDate', date.format("YYYY/MM/DD"));
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
        this.sendFiltre('endDate', date.format("YYYY/MM/DD"));
    }
    dateRange() {
        if (this.props.filtruItems.indexOf('dataRange') > -1) {
            return (
                <div className="filtru-item data-range">
                    <div className="title">Select Date Range</div>
                    <div className="img"><img src={`${process.env.PUBLIC_URL}/img/icon/calendar-page-empty.svg`} alt="client" /></div>
                    <div>
                        <DatePicker
                            selected={this.state.startDate}
                            selectsStart startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeStart.bind(this)} />
                        <div className="to">to</div>
                        <DatePicker
                            selected={this.state.endDate}
                            selectsEnd startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onChange={this.handleChangeEnd.bind(this)} />
                    </div>
                </div>
            )
        }
        else {
            return ''
        }
    }

    // countryVal() {
    //     if (this.props.filtruItems.indexOf('country') > -1) {
    //         if (this.props.listLoterii) {
    //             return (
    //                 <div className="filtru-item ml10">
    //                     <span>Country</span>
    //                     <select onChange={this.countryValChange.bind(this)}>
    //                         <option value="all">ALL</option>
    //                         {
    //                             this.countryValOption()
    //                         }
    //                     </select>
    //                 </div>
    //             )
    //         }
    //     }
    //     else {
    //         return '';
    //     }
    // }
    // countryValOption() {
    //     var countryArr = [];
    //     for (var i = 0; i < this.props.listLoterii[0].lotteries.length; i++) {
    //         countryArr.push(this.props.listLoterii[0].lotteries[i].country)
    //     }
    //     var uniqArr = [...new Set(countryArr)];
    //     var option = [];
    //     for (var z = 0; z < uniqArr.length; z++) {
    //         option.push(<option key={z} value={uniqArr[z]}>{uniqArr[z]}</option>)
    //     }
    //     return option;
    // }
    // countryValChange(e) {
    //     this.setState({
    //         country: e.target.value
    //     });
    //     this.sendFiltre('country', e.target.value);
    // }
    // statusPendingValidated() {
    //     if (this.props.filtruItems.indexOf('statusValidatedPending') > -1) {
    //         return (
    //             <div className="filtru-item ml10">
    //                 <span>Status</span>
    //                 <select onChange={this.statusValChange.bind(this)}>
    //                     <option value="all">ALL</option>
    //                     <option value="1">Pending</option>
    //                     <option value="0">Validated</option>
    //                 </select>
    //             </div>
    //         )
    //     }
    //     else {
    //         return ''
    //     }
    // }
    // statusActiveInactive() {
    //     if (this.props.filtruItems) {
    //         if (this.props.filtruItems.indexOf('statusActiveInactive') > -1) {
    //             return (
    //                 <div className="filtru-item ml10">
    //                     <span>Status</span>
    //                     <select onChange={this.statusValChange.bind(this)}>
    //                         <option value="all">ALL</option>
    //                         <option value="active">active</option>
    //                         <option value="inactive">inactive</option>
    //                     </select>
    //                 </div>
    //             )
    //         }
    //         else {
    //             return ''
    //         }
    //     }
    // }
    status8() {
        if (this.props.filtruItems) {
            if (this.props.filtruItems.indexOf('status8') > -1) {
                return (
                    <div className="filtru-item ml10">
                        <span>Status</span>
                        <select onChange={this.statusValChange.bind(this)}>
                            <option value="all">ALL</option>
                            <option value="0">PENDING</option>
                            <option value="1">PRE-WIN</option>
                            <option value="2">PRE-LOST</option>
                            <option value="3">WIN</option>
                            <option value="4">RETURN BET</option>
                            <option value="5">CANCELED</option>
                            <option value="6">PAID OUT</option>
                            <option value="7">PRE-BET</option>
                            <option value="8">LOST</option>
                        </select>
                    </div>
                )
            }
            else {
                return ''
            }
        }
    }
    ticketCode() {
        if (this.props.filtruItems.indexOf('ticketCode') > -1) {
            return (
                <div className="filtru-item ml10">
                    <span className="filtru-item-username">Search</span>
                    <input type="text" value={this.state.ticketCode} onChange={this.ticketCodeChange.bind(this)} />
                </div>
            )
        }
        else {
            return ''
        }
    }
    ticketCodeChange(e) {
        this.setState({
            ticketCode: e.target.value
        });
        this.sendFiltre('ticketCode', e.target.value);
    }




    statusValChange(e) {
        this.setState({
            status: e.target.value
        });
        this.sendFiltre('status', e.target.value);
    }
    ora() {
        if (this.props.filtruItems) {
            var oraArr = [];
            if (this.props.filtruItems.indexOf('ora') > -1) {
                for (var i = 0; i < 24; i++) {
                    if (i.toString().length === 1) {
                        oraArr.push(<option key={i} value={0 + i.toString()}>{0 + i.toString()}</option>)
                    } else {
                        oraArr.push(<option key={i} value={i}>{i}</option>)
                    }
                }
                return (
                    <div className="filtru-item ml10">
                        <span>Hour</span>
                        <select onChange={this.oraValChange.bind(this)}>
                            <option value="all">ALL</option>
                            {oraArr}
                        </select>
                    </div>)
            }
            else {
                return ''
            }
        }
    }
    oraValChange(e) {
        this.setState({
            ora: e.target.value
        });
        this.sendFiltre('ora', e.target.value);
    }
    inputUsername() {
        if (this.props.filtruItems.indexOf('username') > -1) {
            return (
                <div className="filtru-item ml10">
                    <span className="filtru-item-username">Username</span>
                    <input type="text" value={this.state.usernameInput} onChange={this.inputUsernameChange.bind(this)} />
                </div>
            )
        }
        else {
            return ''
        }
    }
    inputUsernameChange(e) {
        this.setState({
            usernameInput: e.target.value
        });
        this.sendFiltre('username', e.target.value);
    }
    grup() {
        if ((this.props.grupCaserie) && (this.props.grupCaserie.grup)) {
            // console.log('----', this.props.grupCaserie);
            var option = [];
            for (var i = 0; i < this.props.grupCaserie.grup.length; i++) {
                option.push(<option key={i} value={this.props.grupCaserie.grup[i]}>{this.props.grupCaserie.grup[i]}</option>);
            }
            return (
                <div className="filtru-item ml10">
                    <span>Grup</span>
                    <select onChange={this.grupValChange.bind(this)}>
                        <option value="all">ALL</option>
                        {option}
                    </select>
                </div>
            )
        }
        else {
            return ''
        }
    }
    grupValChange(e) {
        this.setState({
            grup: e.target.value
        });
        this.sendFiltre('grup', e.target.value);
    }
    // caserie() {
    //     if ((this.props.grupCaserie) && (this.props.grupCaserie.caserie)) {
    //         var option = [];
    //         for (var i = 0; i < this.props.grupCaserie.caserie.length; i++) {
    //             option.push(<option key={i} value={this.props.grupCaserie.caserie[i]}>{this.props.grupCaserie.caserie[i]}</option>);
    //         }
    //         return (
    //             <div className="filtru-item ml10">
    //                 <span>Caserie</span>
    //                 <select onChange={this.caserieValChange.bind(this)}>
    //                     <option value="all">ALL</option>
    //                     {option}
    //                 </select>
    //             </div>
    //         )
    //     }
    //     else {
    //         return ''
    //     }
    // }
    // caserieValChange(e) {
    //     this.setState({
    //         caserie: e.target.value
    //     });
    //     this.sendFiltre('caserie', e.target.value);
    // }
    // lotteryVal() {
    //     if ((this.props.grupCaserie) && (this.props.grupCaserie.lottery)) {
    //         var option = [];
    //         for (var i = 0; i < this.props.grupCaserie.lottery.length; i++) {
    //             option.push(<option key={i} value={this.props.grupCaserie.lottery[i]}>{this.props.grupCaserie.lottery[i]}</option>);
    //         }
    //         return (
    //             <div className="filtru-item ml10">
    //                 <span>Lottery</span>
    //                 <select onChange={this.lotteryValChange.bind(this)}>
    //                     <option value="all">ALL</option>
    //                     {option}
    //                 </select>
    //             </div>
    //         )
    //     }
    //     else {
    //         return ''
    //     }
    // }
    // lotteryValChange(e) {
    //     this.setState({
    //         lottery: e.target.value
    //     });
    //     this.sendFiltre('lottery', e.target.value);
    // }
    filtreDD(val) {
        if ((this.props.grupCaserie) && (this.props.grupCaserie[val])) {
            var option = [];
            for (var i = 0; i < this.props.grupCaserie[val].length; i++) {
                option.push(<option key={i} value={this.props.grupCaserie[val][i]}>{this.props.grupCaserie[val][i]}</option>);
            }
            return (
                <div className="filtru-item ml10">
                    <span>{val}</span>
                    <select onChange={this.filtreDDValChange.bind(this, val)}>
                        <option value="all">ALL</option>
                        {option}
                    </select>
                </div>
            )
        }
        else {
            return ''
        }
    }
    filtreDDValChange(val, e) {
        this.setState({
            [val]: e.target.value
        });
        this.sendFiltre('' + [val] + '', e.target.value);
    }

    // roundOption() {
    //     if ((this.props.grupCaserie) && (this.props.grupCaserie.round)) {
    //         var option = [];
    //         for (var i = 0; i < this.props.grupCaserie.round.length; i++) {
    //             option.push(<option key={i} value={this.props.grupCaserie.round[i]}>{this.props.grupCaserie.round[i]}</option>);
    //         }
    //         return (
    //             <div className="filtru-item ml10">
    //                 <span>Round</span>
    //                 <select onChange={this.roundValChange.bind(this)}>
    //                     <option value="all">ALL</option>
    //                     {option}
    //                 </select>
    //             </div>
    //         )
    //     }
    //     else {
    //         return ''
    //     }
    // }
    // roundValChange(e) {
    //     this.setState({
    //         round: e.target.value
    //     });
    //     this.sendFiltre('round', e.target.value);
    // }
    color() {
        if (this.props.color) {
            return this.props.color
        } else {
            return ""
        }
    }
    buttons() {
        var buttons = []
        if (!this.props.buttons) {
            return '';
        } else {
            for (var i = 0; i < this.props.buttons.length; i++) {
                if (this.props.buttons.indexOf(this.props.buttons[i]) > -1) {
                    buttons.push(<div key={i} onClick={this.buttonsFunction.bind(this, this.props.buttons[i])}><span className={"img " + this.props.buttons[i]}></span></div>)
                }
            }

            return (buttons);
        }
    }


    loading() {
        // console.log(this.props.loadingTable, this.props.filtruName);
        if (this.props.loadingTable === this.props.filtruName) {
            return 'loading'
        }
        else {
            return ''
        }
    }
    noFiltre() {
        if ((this.props.filtruItems.length === 0) && (!this.props.grupCaserie)) {
            return 'no-filtre'
        }
        else {
            return ''
        }
    }
    popUp(val) {
        // console.log(val);
        this.props.acPopVizibil();
        this.props.acPopTestVal({ title: val[0], action: val[1], color: 'cyan' });
    }
    render() {
        // console.log('tablefiltre', this.props.filtruItems);
        return (
            <div className={"panel-header " + this.state.hide + " " + this.color() + " " + this.loading() + " " + this.printClass() + ""}>
                <div className="panel-header-top">
                    <div className="left">{this.props.filtruName}</div>
                    <div className="right">{this.buttons()}</div>
                </div>
                <div className={"panel-header-filtru " + this.noFiltre()}>
                    <div className="con-filtru">
                        {this.dateRange()}

                        {/*  {this.countryVal()}
                        {this.lotteryVal()}
                        {this.roundOption()}
                        {this.caserie()}
                        {this.statusPendingValidated()}
                        {this.statusActiveInactive()}
                    */}
                        {this.grup()}
                        {this.filtreDD('lottery')}
                        {this.filtreDD('country')}
                        {this.filtreDD('round')}
                        {this.filtreDD('agency')}
                        {this.filtreDD('worker')}
                        {this.ora()}
                        {this.status8()}
                        {this.inputUsername()}
                        {this.ticketCode()}
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        loadingTable: state.loadingTable,
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acTableFiltreData: acTableFiltreData,

        acAxiosListRetViewUsers: acAxiosListRetViewUsers,
        acAxiosListRetAgenciesReport: acAxiosListRetAgenciesReport,
        acAxiosListRetViewTickets: acAxiosListRetViewTickets,
        acAxiosListRetViewRounds: acAxiosListRetViewRounds,
        acAxiosListRetViewOdds: acAxiosListRetViewOdds,
        acAxiosListRetPrintUsers: acAxiosListRetPrintUsers,
        acAxiosListRetPrintAgencies: acAxiosListRetPrintAgencies,
        acPopVizibil: acPopVizibil,
        acPopTestVal: acPopTestVal,
        acAxiosListRetPrintGroups: acAxiosListRetPrintGroups,
        acXlsTickets: acXlsTickets,
        acXlsRounds: acXlsRounds
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(TableFiltre);
