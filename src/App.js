import { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { getUser, logout } from './services/userService';
import IndexPage from './dashboard/Index';
import LoginPage from './auth/Login';
import ManageEmployeesPage from './employees/ManageEmployees';
import IntakeFormPage from './intakes/IntakeForm';
import ManageIntakesPage from './intakes/ManageIntakes';
import LocationExplorerPage from './locations/LocationExplorer';
import LocationDetailsPage from './locations/LocationDetails';
import ManageLocationsPage from './locations/ManageLocations';
import SurveyFormPage from './surveys/SurveyForm';
import ManageSurveysPage from './surveys/ManageSurveys';
import Navigation from './components/navigation';
import './App.css';

function App(props) {

  const [userState, setUserState] = useState({ user: getUser() });

  function handleSignupOrLogin() {
    // place user into state using the setter function
    setUserState({ user: getUser() });
    // programmatically route user to dashboard
    props.history.push("/");
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push("/");
  }

  return (
    <>
      <Navigation user={userState.user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path='/' render={props => <IndexPage user={userState.user}/>} />
        <Route exact path='/login' render={props => <LoginPage handleSignupOrLogin={handleSignupOrLogin}/>} />
        <Route exact path='/manage-employees' render={props => <ManageEmployeesPage />} />
        <Route exact path='/intake-form' render={props => <IntakeFormPage />} />
        <Route exact path='/manage-intakes' render={props => <ManageIntakesPage />} />
        <Route exact path='/location-explorer' render={props => <LocationExplorerPage />} />
        <Route exact path='/location-explorer/:locationId' component={LocationDetailsPage} />
        <Route exact path='/manage-locations' render={props => <ManageLocationsPage />} />
        <Route exact path='/manage-surveys' render={props => <ManageSurveysPage />} />
        <Route exact path='/survey-form' render={props => <SurveyFormPage />} />
      </Switch>
    </>
  );
}

export default withRouter(App);
