import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Landing, Register, Page404, Edit } from '../pages';

export function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/enterprise/register" component={Register} />
        <Route exact path="/enterprise/:id/edit" component={Edit} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}
