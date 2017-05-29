import { createStore, combineReducers, applyMiddleware } from "redux";
import tableFiltreData from './components/reducers/tableFiltreData';
import ticketsList from './components/reducers/ticketsList';
import ticketsListRoundDD from './components/reducers/ticketsListRoundDD';
import popVizibil from './components/reducers/popVizibil';
import popInfo from './components/reducers/popInfo';
import userSettings from './components/reducers/userSettings';
import usersList from './components/reducers/usersList';
import popVal from './components/reducers/popVal';
import logIn from './components/reducers/logIn';
import historyOdds from './components/reducers/historyOdds';
import alertVizibil from './components/reducers/alertVizibil';
import loadingTable from './components/reducers/loadingTable';

import listRepViewUsers from './components/reducers/listRepViewUsers';
import ddGrupCaserieUsers from './components/reducers/ddGrupCaserieUsers';
import listRetAgenciesReport from './components/reducers/listRetAgenciesReport';
import ddGrupCaserieAgencies from './components/reducers/ddGrupCaserieAgencies';
import listRetViewTickets from './components/reducers/listRetViewTickets';
import listRetViewRounds from './components/reducers/listRetViewRounds';
import ddBetsMonitorTickets from './components/reducers/ddBetsMonitorTickets';
import ddBetsMonitorRounds from './components/reducers/ddBetsMonitorRounds';
import listRetViewOdds from './components/reducers/listRetViewOdds';
import ddOdds from './components/reducers/ddOdds';
import retViewClient from './components/reducers/retViewClient';
import listRetPrintUsers from './components/reducers/listRetPrintUsers';
import listRetViewOddsOverall from './components/reducers/listRetViewOddsOverall';
import listRetPrintAgencies from './components/reducers/listRetPrintAgencies';
import popTestInfo from './components/reducers/popTestInfo';
import listRetPrintGroups from './components/reducers/listRetPrintGroups';



import thunk from "redux-thunk";

export default createStore(
    combineReducers({
        tableFiltreData: tableFiltreData,
        ticketsList: ticketsList,
        ticketsListRoundDD: ticketsListRoundDD,
        popVizibil: popVizibil,
        popInfo: popInfo,
        userSettings: userSettings,
        usersList: usersList,
        popVal: popVal,
        logIn: logIn,
        historyOdds: historyOdds,
        alertVizibil: alertVizibil,
        loadingTable: loadingTable,

        listRepViewUsers: listRepViewUsers,
        ddGrupCaserieUsers: ddGrupCaserieUsers,
        listRetAgenciesReport: listRetAgenciesReport,
        ddGrupCaserieAgencies: ddGrupCaserieAgencies,
        listRetViewTickets: listRetViewTickets,
        listRetViewRounds: listRetViewRounds,
        ddBetsMonitorTickets: ddBetsMonitorTickets,
        ddBetsMonitorRounds: ddBetsMonitorRounds,
        listRetViewOdds: listRetViewOdds,
        ddOdds: ddOdds,
        retViewClient: retViewClient,
        listRetPrintUsers: listRetPrintUsers,
        listRetViewOddsOverall: listRetViewOddsOverall,
        listRetPrintAgencies: listRetPrintAgencies,
        popTestInfo: popTestInfo,
        listRetPrintGroups: listRetPrintGroups

    }), {}, applyMiddleware(thunk)
);
