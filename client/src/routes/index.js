
import React from 'react'
import { useRoutes } from 'react-router'
import Auth from '../features/Auth'
import PageDashboardLayout from '../features/Dashboard/layouts/PageDashbaordLayout';
import Home from '../features/Dashboard/Home';
import Student from '../features/Dashboard/Student';
import Teachers from '../features/Dashboard/Teachers';
import Subject from '../features/Dashboard/Subject';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => useRoutes([
  // These are the same as the props you provide to <Route>
  // dashboard routes
  { path: "/auth", element: <Auth /> },
  { path: "/", element: <PageDashboardLayout title="Dashboard"><Home/></PageDashboardLayout> },
  { path: "/students", element: <PageDashboardLayout title="Students"><Student/></PageDashboardLayout> },
  { path: "/teachers", element: <PageDashboardLayout title="Teachers"><Teachers/></PageDashboardLayout> },
  { path: "/subjects", element: <PageDashboardLayout title="Subjects"><Subject/></PageDashboardLayout> },
]);
