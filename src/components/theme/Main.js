import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'





import BreadCrumbs from '../containers/BreadCrumbs'
import Reports from '../containers/Reports'
import BetsMonitor from '../containers/BetsMonitor'
import OddsManagement from '../containers/OddsManagement'
import Clients from '../containers/Clients'
import Pag404 from '../containers/Pag404'

class Main extends React.Component {

    render() {

        return (
            <div className="main">
                <BreadCrumbs />
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/clients`} component={Clients} />
                    <Route exact path={`${process.env.PUBLIC_URL}/odds-management`} component={OddsManagement} />
                    <Route exact path={`${process.env.PUBLIC_URL}/bets-monitor`} component={BetsMonitor} />
                    <Route exact path={`${process.env.PUBLIC_URL}/reports`} component={Reports} />
                    <Redirect from={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/bets-monitor`} />
                    <Route path='*' component={Pag404} />
                </Switch>
            </div>
        )
    }
}
export default Main;