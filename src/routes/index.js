import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import EnrollRegister from '~/pages/EnrollRegister';
import EnrollmentEdition from '~/pages/EnrollmentEdition';
import EnrollmentsList from '~/pages/EnrollmentsList';
import HelpOrders from '~/pages/HelpOrders';
import PlanEdition from '~/pages/PlanEdition';
import PlanRegister from '~/pages/PlanRegister';
import PlansList from '~/pages/PlansList';
import SignIn from '~/pages/SignIn';
import StudentEdition from '~/pages/StudentEdition';
import StudentRegister from '~/pages/StudentRegister';
import StudentsList from '~/pages/StudentsList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={StudentsList} isPrivate />
      <Route path="/student/register" component={StudentRegister} isPrivate />
      <Route path="/student/edit" component={StudentEdition} isPrivate />

      <Route path="/plans" component={PlansList} isPrivate />
      <Route path="/plan/register" component={PlanRegister} isPrivate />
      <Route path="/plan/edit" component={PlanEdition} isPrivate />

      <Route path="/enrollments" component={EnrollmentsList} isPrivate />
      <Route path="/enrollment/register" component={EnrollRegister} isPrivate />
      <Route path="/enrollment/edit" component={EnrollmentEdition} isPrivate />

      <Route path="/help_orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
