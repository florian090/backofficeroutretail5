import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { acAlertVizibil } from '../actions/acAlertVizibil';



class Alert extends React.Component {


    componentWillReceiveProps(nextProps) {
        if (nextProps.alertVizibil.alert === true) {
            this.timeout('set');
        }
        else if (nextProps.alertVizibil.alert === false) {
            this.timeout();
        }
    }
    timeout(val) {
        if (val === 'set') {
            this.timer = setTimeout(() => {
                this.changeVizibil();
            }, 3000)
        }
        else {
            clearTimeout(this.timer);
        }
    }
    alertVizibil() {
        if (this.props.alertVizibil.alert === true) {
            if ((this.props.alertVizibil.status === 'succes') || (this.props.alertVizibil.status === 'success')) {
                return 'succes active'
            }
            else if (this.props.alertVizibil.status === 'status') {
                return 'status active'
            }
            else if (this.props.alertVizibil.status === 'error') {
                return 'error active'
            }
        }

        else {
            if ((this.props.alertVizibil.status === 'succes') || (this.props.alertVizibil.status === 'success')) {
                return 'succes'
            }
            else if (this.props.alertVizibil.status === 'status') {
                return 'status'
            }
            else if (this.props.alertVizibil.status === 'error') {
                return 'error'
            }
        }
    }
    alertStatus() {
        if ((this.props.alertVizibil.status === 'succes') || (this.props.alertVizibil.status === 'success')) {
            return 'Operation successful'
        }
        else {
            return 'Operation failed'
        }
    }
    changeVizibil() {
        this.timeout()
        this.props.acAlertVizibil({ 'alert': false });
    }
    render() {
        // console.log(this.props);
        return (
            <div className={"con-alert " + this.alertVizibil()}>
                <button className="alert-cancel" onClick={this.changeVizibil.bind(this)}>x</button>
                <div className="alert">{this.alertStatus()}</div>
                <div className={"alert-bar " + this.alertVizibil()} ></div>
            </div>
        )
    }

}



function mapStateToProps(state) {
    return {
        alertVizibil: state.alertVizibil
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acAlertVizibil: acAlertVizibil
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Alert);

