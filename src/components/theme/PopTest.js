import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { acPopVizibil } from '../actions/acPopVizibil';
import { acAlertVizibil } from '../actions/acAlertVizibil';

import { acAxiosPopOddsAdjustement } from '../actions/acAxiosPopOddsAdjustement';
import { acAxiosPopAddUser } from '../actions/acAxiosPopAddUser';
import { acAxiosPopAddAgency } from '../actions/acAxiosPopAddAgency';
import { acAxiosPopGameSettings } from '../actions/acAxiosPopGameSettings';
import { acAxiosPopAddGroup } from '../actions/acAxiosPopAddGroup';

import { acPopTestVal } from '../actions/acPopTestVal';




class PopUp extends React.Component {

    constructor() {
        super();
        this.state = {
            idBetshop: '',
            address: '',
            location: '',
            groupName: '',
            allowedIp: '',
            gamesettings: '',
            username: '',
            password: '',
            retypePassword: '',
            firstName: '',
            lastName: '',
            group: '',
            agencyName: '',

        };
    }

    handleClick(e) {
        if (e.target.className === "con-pop-bg active") {
            this.props.acPopVizibil();
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick.bind(this), false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick.bind(this), false);
    }

    componentWillReceiveProps(nextProps) {
        this.props.acAlertVizibil({ 'alert': false });
        if ((!this.props.popTestInfo.value) || (!this.props.popTestInfo.value.bet_tax)) {
            this.setState({ gamesettings: nextProps.popTestInfo.value });
        }
    }

    popVizibil() {
        if (this.props.popVizibil === true) {
            return 'active'
        }
        else {
            return ''
        }
    }

    cancel() {
        this.props.acPopVizibil();
    }
    confirm() {
        var filtruData = {};
        // console.log(this.props);
        if (this.props.popTestInfo.title === "ADD USER") {
            filtruData = {
                username: this.state.username,
                password: this.state.password,
                retypePassword: this.state.retypePassword,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                agencyName: this.state.agencyName,
            }
            this.props[this.props.popTestInfo.action](filtruData);
        }
        else if (this.props.popTestInfo.title === "ADD BETSHOP") {
            filtruData = {
                idBetshop: this.state.idBetshop,
                address: this.state.address,
                location: this.state.location,
                groupName: this.state.groupName,
                allowedIp: this.state.allowedIp,
                agencyName: this.state.agencyName,
            }
            this.props[this.props.popTestInfo.action](filtruData);
        }
        else if (this.props.popTestInfo.title === "ADD GROUP") {
            this.props[this.props.popTestInfo.action](this.state.groupName);
        }
        else {
            var lottery;
            if (this.props.popTestInfo.value.lottery_name) { lottery = this.props.popTestInfo.value.lottery_name.replace(/ /g, "_"); } else { lottery = null }
            filtruData = {
                'lottery': lottery,
                'status': this.props.popTestInfo.value.status,
                'country': this.props.popTestInfo.value.country,
                'ticketid': this.props.popTestInfo.value.ticketid,
                'roundid': this.props.popTestInfo.value.roundid,
                'odds': this.props.popTestInfo.value.odds,
                'gameSettings': this.props.popTestInfo.value,
                'tableFiltreData': this.props.tableFiltreData
            }
            this.props[this.props.popTestInfo.action](filtruData);
        }
        this.props.acPopVizibil();

    }
    gameSettingsChange(val, e) {
        var popVal = {
            ...this.props.popTestInfo.value,
            [val]: e.target.value
        }
        this.props.acPopTestVal({ ...this.props.popTestInfo, value: popVal });
    }
    groupDD() {
        if (this.props.listRetPrintGroups !== null) {
            var option = [];
            for (var i = 0; i < this.props.listRetPrintGroups.length; i++) {
                option.push(<option key={i} value={this.props.listRetPrintGroups[i]}>{this.props.listRetPrintGroups[i]}</option>);
            }
            return (
                <select onChange={this.groupDDChange.bind(this)}>
                    {option}
                </select>
            )
        } else {
            return ''
        }
    }
    agencyDD() {
        if (this.props.listRetPrintAgencies !== null) {
            var option = [];
            for (var i = 0; i < this.props.listRetPrintAgencies.length; i++) {
                option.push(<option key={i} value={this.props.listRetPrintAgencies[i].agency_name}>{this.props.listRetPrintAgencies[i].agency_name}</option>);
            }
            return (
                <select onChange={this.agencyDDChange.bind(this)}>
                    <option value=""> </option>
                    {option}
                </select>
            )
        } else {
            return ''
        }
    }
    groupDDChange(e) {
        this.setState({ groupName: e.target.value });
    }
    agencyDDChange(e) {
        this.setState({ agencyName: e.target.value });
    }
    addGroup(e) {
        // console.log(e.target.value);
        this.setState({ groupName: e.target.value });
    }
    mid2() {
        var papVal = [];
        if (this.props.popTestInfo.value) {
            papVal = Object.values(this.props.popTestInfo.value);
        }
        var infoArr = [];
        for (var i = 0; i < papVal.length; i++) {
            infoArr.push(<div key={i} >{papVal[i]}</div>)
        }

        if (this.props.popTestInfo.action === 'acAxiosPopOddsAdjustement') {
            var oddsArr = this.props.popTestInfo.value.odds.split(',');
            return (
                <div className="odds-management">
                    <div className="odds-management-row">{infoArr}</div>
                    <div className="odds-management-row input">
                        {oddsArr.map((val, i) => {
                            return (
                                <div key={i}>
                                    <span>{i + 1}</span>
                                    <input type="text" value={val} onChange={this.inputOddsChange.bind(this, i)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
        else if (this.props.popTestInfo.action === 'acAxiosPopGameSettings') {
            var valArr = [];
            for (var k in this.props.popTestInfo.value) {
                if ((this.props.popTestInfo.value.hasOwnProperty(k)) && (k !== 'client_name')) {
                    valArr.push(
                        <div key={k} className="client-management-cell">
                            <div>{k.replace(/_/g, " ")}</div>
                            <div>{this.state.gamesettings[k]}</div>
                            <div><input type="text" value={this.props.popTestInfo.value[k]} onChange={this.gameSettingsChange.bind(this, k)} /></div>
                        </div>);
                }
            }
            return (
                <div className="client-management">
                    {valArr}
                </div>
            )
        }
        else if (this.props.popTestInfo.action === 'acAxiosPopAddGroup') {
            return (
                <div className="add">
                    <div>
                        <span>Group Name</span>
                        <input type="text" placeholder="Group Name" value={this.state.groupName} onChange={this.addGroup.bind(this)} />
                    </div>
                </div>
            )
        }
        else if (this.props.popTestInfo.action === 'acAxiosPopAddUser') {
            return (
                <div className="add">
                    <div>
                        <span>Username</span>
                        <input type="text" placeholder="Username" value={this.state.username} onChange={this.addUser.bind(this, 'username')} />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type="text" placeholder="Password" value={this.state.password} onChange={this.addUser.bind(this, 'password')} />
                    </div>
                    <div>
                        <span>Retype Password</span>
                        <input type="text" placeholder="Retype Password" value={this.state.retypePassword} onChange={this.addUser.bind(this, 'retypePassword')} />
                    </div>
                    <div>
                        <span>First Name</span>
                        <input type="text" placeholder="firstName" value={this.state.firstName} onChange={this.addUser.bind(this, 'firstName')} />
                    </div>
                    <div>
                        <span>Last Name</span>
                        <input type="text" placeholder="lastName" value={this.state.lastName} onChange={this.addUser.bind(this, 'lastName')} />
                    </div>
                    <div>
                        <span>Agency</span>
                        {/*<input type="text" placeholder="Agency" value={this.state.agencyName} onChange={this.addUser.bind(this, 'agencyName')} />*/}
                        {this.agencyDD()}
                    </div>
                </div>
            )
        }
        else if (this.props.popTestInfo.action === 'acAxiosPopAddAgency') {
            return (
                <div className="add">
                    <div>
                        <span>Betshop Name</span>
                        <input type="text" placeholder="Betshop Name" value={this.state.agencyName} onChange={this.addBetsop.bind(this, 'agencyName')} />
                    </div>
                    <div>
                        <span>ID Betshop</span>
                        <input type="text" placeholder="ID Betshop" value={this.state.idBetshop} onChange={this.addBetsop.bind(this, 'idBetshop')} />
                    </div>
                    <div>
                        <span>Adress</span>
                        <input type="text" placeholder="Adress" value={this.state.address} onChange={this.addBetsop.bind(this, 'address')} />
                    </div>
                    <div>
                        <span>Location</span>
                        <input type="text" placeholder="Location" value={this.state.location} onChange={this.addBetsop.bind(this, 'location')} />
                    </div>
                    <div>
                        <span>IP Betshop</span>
                        <input type="text" placeholder="IP Betshop" value={this.state.allowedIp} onChange={this.addBetsop.bind(this, 'allowedIp')} />
                    </div>
                    <div>
                        <span>Group</span>
                        {this.groupDD()}
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="pop-mid">
                    {infoArr}
                </div>
            )
        }
    }
    inputOddsChange(i, e) {
        if (this.props.popTestInfo.value.odds) {

            var oddsArr = this.props.popTestInfo.value.odds.split(',');
            oddsArr[i] = e.target.value;
            var popTestInfo = {
                ...this.props.popTestInfo,
                value: {
                    ...this.props.popTestInfo.value,
                    odds: oddsArr.toString()
                }
            }
            this.props.acPopTestVal(popTestInfo);
        }
    }
    addUser(val, e) {
        this.setState({ [val]: e.target.value });
    }
    addBetsop(val, e) {
        this.setState({ [val]: e.target.value });
    }

    sistem() {
        var arr = this.props.popVal.lottery_name.split(' ');
        var sistem = arr.slice(-1)[0];
        var sistemArr = sistem.split('/');
        return sistemArr;
    }


    footer() {
        // if (this.props.popTestInfo.action === "acAxiosPopValidatePrewin") {
        //     return (
        //         <div className="pop-footer">
        //             <button className="butCancel" onClick={this.cancel.bind(this)}>CANCEL</button>
        //             <button className="butConfirm prewin" onClick={this.confirm.bind(this)}>PRE-WIN</button>
        //             <button className="butConfirm win" onClick={this.confirm.bind(this)}>WIN</button>
        //         </div>
        //     )
        // }
        // else if (this.props.popInfo[0][1] === "notification") {
        //     return (
        //         <div className="pop-footer">
        //             <button className="butOK" onClick={this.cancel.bind(this)}>OK</button>
        //         </div>
        //     )
        // }
        // else {
        //     return (
        //         <div className="pop-footer">
        //             <button className="butCancel" onClick={this.cancel.bind(this)}>CANCEL</button>
        //             <button className="butConfirm" onClick={this.confirm.bind(this)}>SUBMIT</button>
        //         </div>
        //     )
        // }
        return (
            <div className="pop-footer">
                <button className="butCancel" onClick={this.cancel.bind(this)}>CANCEL</button>
                <button className="butConfirm" onClick={this.confirm.bind(this)}>SUBMIT</button>
            </div>
        )
    }
    color() {
        if (this.props.popTestInfo.color) {
            return this.props.popTestInfo.color;
        } else {
            return '';
        }
    }
    render() {
        // console.log('popUp', this.props);
        if (this.props.popTestInfo) {
            return (
                <div className={"con-pop-bg " + this.popVizibil()} >
                    <div className="con-pop">
                        <div className={"pop-header " + this.color()}>
                            <h3>{this.props.popTestInfo.title}</h3>
                        </div>

                        {this.mid2()}
                        {this.footer()}

                    </div>
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
        popVizibil: state.popVizibil,
        popInfo: state.popInfo,
        popVal: state.popVal,
        tableFiltreData: state.tableFiltreData,
        popTestInfo: state.popTestInfo,
        listRetPrintGroups: state.listRetPrintGroups,
        listRetPrintAgencies: state.listRetPrintAgencies
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acPopVizibil: acPopVizibil,
        acAlertVizibil: acAlertVizibil,
        acAxiosPopOddsAdjustement: acAxiosPopOddsAdjustement,
        acAxiosPopAddUser: acAxiosPopAddUser,
        acAxiosPopAddAgency: acAxiosPopAddAgency,
        acPopTestVal: acPopTestVal,
        acAxiosPopGameSettings: acAxiosPopGameSettings,
        acAxiosPopAddGroup: acAxiosPopAddGroup
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(PopUp);
