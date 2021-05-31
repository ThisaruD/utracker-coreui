import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));


const MonthlyReport = React.lazy(() => import('./views/Reports/MonthlyReport/MonthlyReport'));
const DailyReport = React.lazy(() => import('./views/Reports/DailyReport/DailyReport'));
const WeeklyReport = React.lazy(() => import('./views/Reports/WeeklyReport/WeeklyReport'));
const LiveLocation = React.lazy(() => import('./views/Locations/LiveLocation/LiveLocation'));
const PreviousLocation = React.lazy(() => import('./views/Locations/PreviousLocation/PreviousLocation'));
const PreviousPaths = React.lazy(() => import('./views/Locations/PreviousPaths/PreviousPaths'));
const AddVehicle = React.lazy(() => import('./views/Vehicles/AddVehicle/AddVehicle'));
const EditVehicle = React.lazy(() => import('./views/Vehicles/EditVehicle/EditVehicle'));
const ViewVehicle = React.lazy(() => import('./views/Vehicles/ViewVehicle/ViewVehicle'));
const EditVehicleDetails = React.lazy(() => import('./views/Vehicles/EditVehicle/EditVehicleData'));
const About = React.lazy(() => import('./views/About/About'));
const Contact = React.lazy(() => import('./views/Contact/Contact'));
const Setting = React.lazy(() => import('./views/Setting/Setting'));
const Profile = React.lazy(() => import('./views/Profile/Profile'));
const ProfileEdit = React.lazy(() => import('./views/Profile/ProfileEdit'));
const ViewCompany = React.lazy(() => import('./views/Company/ViewCompany/ViewCompany'));
const EditCompany = React.lazy(() => import('./views/Company/EditCompany/EditCompany'));
const EditCompanyDetails = React.lazy(() => import('./views/Company/EditCompany/EditCompanyDetails'));
const AddCompany = React.lazy(() => import('./views/Company/AddCompany/AddCompany'));
const ViewVehicleData = React.lazy(() => import('./views/Vehicles/ViewVehicle/ViewVehicleData'));
const ViewCompanyDetails = React.lazy(() => import('./views/Company/ViewCompany/ViewCompanyDetails'));

const SuperAdminHome = React.lazy(() => import('./views/Home/SuperAdminHome/SuperAdminHome'));
const SuperAdminCompanyDetails = React.lazy(()=>import('./views/Home/SuperAdminHome/SuperAdminCompanyDetails'));
const SuperAdminVehicleDetails = React.lazy(()=>import('./views/Home/SuperAdminHome/SuperAdminVehicleDetails'));

//const TransportManagerHome = React.lazy(()=>import('./views/Home/TransportManagerHome/TransportManagerHome'));
const TransportManagerVehicleDetails = React.lazy(()=>import('./views/Home/SuperAdminHome/TransportManagerVehicleDetails'));
const TransportManagerUserDetails = React.lazy(()=>import('./views/Home/SuperAdminHome/TransportManagerUserDetails'));

const StaffMemberVehicleDetails  = React.lazy(()=>import('./views/Home/SuperAdminHome/StaffMemberVehicleDetails'));

const Logout = React.lazy(() => import('./views/Pages/Logout/Logout'));
////////////////////////////Required Sample Pages///////////////////////
// const Company


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  // { path: '/super-admin-home',  name:'SuperAdminHome', component:SuperAdminHome },
  {path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
  {path: '/logout', name: 'Logout', component: Logout},
  {path: '/super-admin-home', name: 'Dashboard', component: SuperAdminHome},
  {path: '/super-admin-company-details', name: 'Super Admin Company Details', component: SuperAdminCompanyDetails},
  {path: '/super-admin-vehicle-details', name: 'Super Admin Vehicle Details', component: SuperAdminVehicleDetails},
  {path: '/transport-manager-vehicle-details', name:'Transport Manager Home', component:TransportManagerVehicleDetails},
  {path: '/transport-manager-user-details', name:'Transport Manager User Details', component:TransportManagerUserDetails},
  {path: '/staff-member-vehicle-details', name:'Staff Member Vehicle Details', component:StaffMemberVehicleDetails},
  {path: '/about', name: 'About', component: About},
  {path: '/contact', name: 'Contact', component: Contact},
  {path: '/setting', name: 'Setting', component: Setting},
  {path: '/profile', name: 'Profile', component: Profile},
  {path: '/profile-edit', name: 'Profile Edit', component: ProfileEdit},


  {path: '/reports/monthly-reports', name: 'MonthlyReport', component: MonthlyReport},
  {path: '/reports/daily-reports', name: 'MonthlyReport', component: DailyReport},
  {path: '/reports/weekly-reports', name: 'MonthlyReport', component: WeeklyReport},
  {path: '/locations/live-location', name: 'LiveLocation', component: LiveLocation},
  {path: '/locations/previous-location', name: 'PreviousLocation', component: PreviousLocation},
  {path: '/locations/previous-paths', name: 'PreviousPaths', component: PreviousPaths},

  {path: '/vehicles/add-vehicle', name: 'Add Vehicle', component: AddVehicle},
  {path: '/vehicles/edit-vehicle', name: 'Edit Vehicle', component: EditVehicle},
  {path: '/vehicles/view-vehicle', name: 'View Vehicle', component: ViewVehicle},
  {path: '/vehicles/details/:id', name: 'Edit Vehicle Details', component: EditVehicleDetails},
  {path: '/vehicles/details2/:id', name: 'View Vehicle Data', component: ViewVehicleData},

  {path: '/company/edit-company', name: 'Edit Company', component: EditCompany},
  {path: '/company/view-company', name: 'View Company', component: ViewCompany},
  {path: '/company/add-company', name: 'Add Company', component: AddCompany},
  {path: '/company/details/:id', name: 'Edit Company Details', component: EditCompanyDetails},
  {path: '/company/details2/:id', name: 'View Company Details', component: ViewCompanyDetails},


  ////////////////sample Required Pages//////////////////////////////////


];

export default routes;
