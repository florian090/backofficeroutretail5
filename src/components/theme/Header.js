import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { acLogIn } from '../actions/acLogIn';



class Header extends React.Component {
    constructor() {
        super();
        this.state = { active: false };
    }
    logout() {
        this.props.acLogIn();
    }
    active() {
        this.setState({ active: !this.state.active });
    }
    classActive() {
        if (this.state.active === true) {
            return 'active'
        } else {
            return ''
        }
    }
    render() {

        return (
            <div className={"header card " + this.classActive()}>
                <div className="header-st">
                    <div className="header-menu" onClick={this.active.bind(this)}><div className="img"></div></div>
                    <div className="header-title">FUNBETTECH</div>
                </div>
                <div className="header-dr">
                    <div className="logout" onClick={this.logout.bind(this)}><div className="img"></div></div>
                </div>
            </div>
        )
    }

}



function mapStateToProps(state) {
    return {

    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        acLogIn: acLogIn
    }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(Header);

