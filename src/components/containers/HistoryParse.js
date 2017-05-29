import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class HistoryParse extends React.Component {
    arrow(pold, pnew) {
        pold = pold.slice(0, -1);
        pnew = pnew.slice(0, -1);
        if (pold > pnew) {
            return <img src="../img/icon/h-arrow-down.png" alt="" />
        }
        else if (pold < pnew) {
            return <img src="../img/icon/h-arrow-up.png" alt="" />
        }
        else if (pold === pnew) {
            return <img src="../img/icon/h-arrow-right.png" alt="" />
        }
    }
    historyCell(val) {
        var cell = [];
        for (var i = 0; i < this.props.tableKey.length; i++) {
            if (val[this.props.tableKey[i]]) {
                cell[i] = <div key={i} className="history-cell">{val[this.props.tableKey[i]]}</div>
            }
            else if (this.props.tableKey[i] === 'arrow') {

                cell[i] = <div key={i} className="history-cell arrow">{this.arrow(val.percent_old, val.percent_new)}</div>
            }
            else {
                cell[i] = <div key={i} className="history-cell">{this.props.tableKey[i]}</div>
            }
        }
        return cell;
    }

    render() {
        // console.log(this.props);
        if (this.props.dataParse) {
            return (
                <div className="history card">
                    <h1>{this.props.title}</h1>
                    <div className="history-body">
                        {
                            this.props.dataParse.map((val, i) => {
                                return (
                                    <div key={i} className="history-row">
                                        <div className="history-cell history-circle">
                                            <div></div>
                                            <span></span>
                                        </div>
                                        {this.historyCell(val)}
                                    </div>
                                )
                            })
                        }
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

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(HistoryParse);
