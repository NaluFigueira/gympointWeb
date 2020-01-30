import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Routes';

import EnrollmentForm from '~/pages/EnrollmentForm';
import EnrollmentsList from '~/pages/EnrollmentsList';
import HelpOrders from '~/pages/HelpOrders';
import PlanForm from '~/pages/PlanForm';
import PlansList from '~/pages/PlansList';
import SignIn from '~/pages/SignIn';
import StudentForm from '~/pages/StudentForm';
import StudentsList from '~/pages/StudentsList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" component={StudentsList} isPrivate />
      <Route path="/student/register" component={StudentForm} isPrivate />
      <Route
        path="/student/edit"
        component={() => <StudentForm edit />}
        isPrivate
      />

      <Route path="/plans" component={PlansList} isPrivate />
      <Route path="/plan/register" component={PlanForm} isPrivate />
      <Route path="/plan/edit" component={() => <PlanForm edit />} isPrivate />

      <Route path="/enrollments" component={EnrollmentsList} isPrivate />
      <Route path="/enrollment/register" component={EnrollmentForm} isPrivate />
      <Route
        path="/enrollment/edit"
        component={() => <EnrollmentForm edit />}
        isPrivate
      />

      <Route path="/help_orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
