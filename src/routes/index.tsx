import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing, Register, Page404, Edit } from '../pages';

export function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/enterprise/register" component={Register} />
      <Route exact path="/enterprise/:name/edit/:id" component={Edit} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}
