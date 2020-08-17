import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './layout/Loader'
import routes from "../route";
import '../../node_modules/font-awesome/scss/font-awesome.scss';

const AdminLayout = Loadable({
    loader: () => import('./layout'),
    loading: Loader
});


class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
          return (route.component) ? (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                  )} />
          ) : (null);
        });

        return (
            <Suspense fallback={<Loader/>}>
                <Switch>
                    {menu}
                    {/* <Route path="/" component={Admin} /> */}
                    <Route path="/" component={AdminLayout} />
                </Switch>
            </Suspense>
        );
    }
}

export default App;
