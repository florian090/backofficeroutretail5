import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { acPopVizibil } from '../actions/acPopVizibil';

import { acPopTestVal } from '../actions/acPopTestVal';


class TableParse extends React.Component {

    constructor() {
        super();
        this.state = { limit: 200 };
    }

    tableHeader() {

        // console.log(this.props.tableHeaderKey.length, this.props.tableHeaderTh.length);
        if (this.props.tableHeaderKey.length !== this.props.tableHeaderTh.length) {
            console.log('-------error -> tableHeaderKey !== tableHeaderTh-------');
        }

        var tableHeaderArr = [];
        for (var i = 0; i < this.props.tableHeaderTh.length; i++) {
            tableHeaderArr[i] = this.props.tableHeaderTh[i];
        }
        var th = [];
        for (var z = 0; z < tableHeaderArr.length; z++) {

            th.push(<th key={z}>{tableHeaderArr[z]}</th>)
        }
        return th


    }
    tableBody() {

        if (this.props.dataParse) {
            var tr = [];
            var length = this.props.dataParse.length;
            if (!this.props.limit) {
                length = this.state.limit
            } else {
                length = this.props.limit
            }

            if ((!this.props.limit) && (this.state.limit > this.props.dataParse.length)) {
                length = this.props.dataParse.length;
            }
            for (var i = 0; i < length; i++) {
                tr.push(
                    <tr key={i} onClick={this.popUp.bind(this, this.props.dataParse[i])}>
                        <td>{i + 1}</td>
                        {this.tableBodyTd(this.props.dataParse[i])}
                    </tr>
                )
            }
            return tr
        }
        else {
            return ''
        }
    }
    tableBodyTd(element) {
        var td = [];
        for (var i = 0; i < this.props.tableHeaderKey.length; i++) {
            if (element) {
                td.push(<td key={i}>{element[this.props.tableHeaderKey[i]]}</td>)
            }

        }
        return td
    }
    popUp(val) {
        if (this.props.popUp) {
            this.props.acPopVizibil();
            this.props.acPopTestVal({ ...this.props.popUpTest, value: val });
        }
    }
    increaseLimitDiv() {
        if ((!this.props.limit) && (this.props.dataParse.length > this.state.limit)) {
            return (<button className="load-more" onClick={this.increaseLimit.bind(this)}>Load more</button>)
        } else {
            return ''
        }
    }
    increaseLimit() {
        this.setState({ limit: this.state.limit + 200 });
    }
    render() {
        // console.log('tablePa', this.props);
        if (this.props.dataParse !== null) {
            return (
                <div className={"con-panel"}>

                    <div className="panel-body">
                        <table>
                            <thead>
                                <tr >
                                    <th>#</th>
                                    {
                                        this.tableHeader()
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.tableBody()
                                }
                            </tbody>
                        </table>
                        {this.increaseLimitDiv()}
                    </div>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }
}


function mapStateToProps(state) {
    return {

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acPopVizibil: acPopVizibil,
        acPopTestVal: acPopTestVal
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(TableParse);
