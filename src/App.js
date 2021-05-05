import './App.css';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './dashboard/index';
import LoginPage from './auth/login';
import ManageEmployeesPage from './employees/manage-employees';
import IntakeFormPage from './intakes/intake-form';
import ManageIntakesPage from './intakes/manage-intakes';
import LocationExplorerPage from './locations/location-explorer';
import ManageLocationsPage from './locations/manage-locations';
import SurveyFormPage from './surveys/survey-form';
import ManageSurveysPage from './surveys/manage-surveys';
import Navigation from './components/navigation';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' render={props => <IndexPage />} />
        <Route exact path='/login' render={props => <LoginPage />} />
        <Route exact path='/manage-employees' render={props => <ManageEmployeesPage />} />
        <Route exact path='/intake-form' render={props => <IntakeFormPage />} />
        <Route exact path='/manage-intakes' render={props => <ManageIntakesPage />} />
        <Route exact path='/location-explorer' render={props => <LocationExplorerPage />} />
        <Route exact path='/manage-locations' render={props => <ManageLocationsPage />} />
        <Route exact path='/manage-surveys' render={props => <ManageSurveysPage />} />
        <Route exact path='/survey-form' render={props => <SurveyFormPage />} />
      </Switch>
    </>
  );
}

export default App;
