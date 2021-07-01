import { Route, Switch } from 'react-router-dom'
import AllStationsPage from './pages/AllStations';
import NewStationsPage from './pages/NewStation';
import MyStationsPage from './pages/MyStations';

import Layout from './components/layout/Layout';

function App() {

  return (

    <Layout>
      <Switch>
      <Route path='/' exact={true}>
        <AllStationsPage />
      </Route>
      <Route path='/new-station'>
        <NewStationsPage />
      </Route>
      <Route path='/my-stations'>
        <MyStationsPage />
      </Route>
      </Switch>
    </Layout>

  );
}

export default App;
