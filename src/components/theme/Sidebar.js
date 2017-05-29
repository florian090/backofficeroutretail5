import React from 'react';
import { NavLink } from 'react-router-dom'

class Sidebar extends React.Component {

    constructor() {
        super();
        this.state = { scroolACtiv: '' };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(event) {
        if (this.checkScrool !== null) {
            var scroolPoz = event.srcElement.body.scrollTop
            if (scroolPoz > 75) {
                this.setState({ scroolACtiv: 'fixed' });
            }
            else {
                this.setState({ scroolACtiv: '' });
            }
        }
    }
    render() {
        // console.log(this.props);
        return (
            <div className="sidebar">
                <div className="profile">
                    <img src={`${process.env.PUBLIC_URL}/img/profile-pic.png`} alt="profile-pic" />
                    <div className="profil-date">
                        <div className="nume">John Smith</div>
                        <div className="email">john.smith@yahoo.com</div>
                    </div>
                </div>
                <div className={"dashbord " + this.state.scroolACtiv}>
                    <h2>DASHBORD</h2>
                    <ul>
                        <li>
                            <NavLink to={`${process.env.PUBLIC_URL}/bets-monitor`}>
                                <div className="circle"></div>
                                <div className="img img-bm"></div>
                                <span className="dashbord-text">Bets Monitor</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={`${process.env.PUBLIC_URL}/odds-management`}>
                                <div className="circle"></div>
                                <div className="img img-om"></div>
                                <span className="dashbord-text">Odds Management</span>
                            </NavLink>

                        </li>
                        <li>
                            <NavLink to={`${process.env.PUBLIC_URL}/clients`}>
                                <div className="circle"></div>
                                <div className="img img-user"></div>
                                <span className="dashbord-text">Clients</span>
                            </NavLink>

                        </li>
                        {/*  <li>
                            <NavLink to={`${process.env.PUBLIC_URL}/lotteries`}>
                                <div className="circle"></div>
                                <div className="img img-lot"></div>
                                <span className="dashbord-text">Lotteries</span>
                            </NavLink>

                        </li>

*/}
                        <li>
                            <NavLink to={`${process.env.PUBLIC_URL}/reports`}>
                                <div className="circle"></div>
                                <div className="img img-rep"></div>
                                <span className="dashbord-text">Reports</span>
                            </NavLink>

                        </li>


                    </ul>

                </div>

            </div>

        )
    }
}
// function mapStateToProps(state) {
//     return {

//     }
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators({

//     }, dispatch)
// }
// export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);
export default Sidebar;
