import React from 'react';

// const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/Base/Cards'));
// const Carousels = React.lazy(() => import('./views/Base/Carousels'));
//const Collapses = React.lazy(() => import('./views/Base/Collapses'));
//const Dropdowns = React.lazy(() => import('./views/Base/Dropdowns'));
//const Forms = React.lazy(() => import('./views/Base/Forms'));
//const Jumbotrons = React.lazy(() => import('./views/Base/Jumbotrons'));
//const ListGroups = React.lazy(() => import('./views/Base/ListGroups'));
//const Navbars = React.lazy(() => import('./views/Base/Navbars'));
//const Navs = React.lazy(() => import('./views/Base/Navs'));
//const Paginations = React.lazy(() => import('./views/Base/Paginations'));
//const Popovers = React.lazy(() => import('./views/Base/Popovers'));
//const ProgressBar = React.lazy(() => import('./views/Base/ProgressBar'));
//const Switches = React.lazy(() => import('./views/Base/Switches'));
//const Tables = React.lazy(() => import('./views/Base/Tables'));
//const Tabs = React.lazy(() => import('./views/Base/Tabs'));
//const Tooltips = React.lazy(() => import('./views/Base/Tooltips'));

// const BrandButtons = React.lazy(() => import('./views/Buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/Buttons/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/Charts'));
 const Dashboard = React.lazy(() => import('./views/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/Icons/Flags'));
// const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
// const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));
// const Alerts = React.lazy(() => import('./views/Notifications/Alerts'));
// const Badges = React.lazy(() => import('./views/Notifications/Badges'));
// const Modals = React.lazy(() => import('./views/Notifications/Modals'));
// const Colors = React.lazy(() => import('./views/Theme/Colors'));
// const Typography = React.lazy(() => import('./views/Theme/Typography'));
// const Widgets = React.lazy(() => import('./views/Widgets/Widgets'));
// const Users = React.lazy(() => import('./views/Users/Users'));
// const User = React.lazy(() => import('./views/Users/User'));



const MonthlyReport = React.lazy(() => import('./views/Reports/MonthlyReport/MonthlyReport'));
const DailyReport = React.lazy(()=> import('./views/Reports/DailyReport/DailyReport'));
const WeeklyReport = React.lazy(()=> import('./views/Reports/WeeklyReport/WeeklyReport'));
const LiveLocation =React.lazy(()=> import('./views/Locations/LiveLocation/LiveLocation'));
const PreviousLocation =React.lazy(()=> import('./views/Locations/PreviousLocation/PreviousLocation'));
const PreviousPaths =React.lazy(()=> import('./views/Locations/PreviousPaths/PreviousPaths'));
const AddVehicle =React.lazy(()=> import('./views/Vehicles/AddVehicle/AddVehicle'));
const EditVehicle =React.lazy(()=> import('./views/Vehicles/EditVehicle/EditVehicle'));
const ViewVehicle =React.lazy(()=> import('./views/Vehicles/ViewVehicle/ViewVehicle'));
const EditVehicleDetails = React.lazy(()=>import('./views/Vehicles/EditVehicle/EditVehicleData'));
const About = React.lazy(()=>import('./views/About/About'));
const Contact = React.lazy(()=>import('./views/Contact/Contact'));
const Setting = React.lazy(()=>import('./views/Setting/Setting'));
const Profile = React.lazy(()=>import('./views/Profile/Profile'));
const ProfileEdit = React.lazy(()=>import('./views/Profile/ProfileEdit'));
const ViewCompany = React.lazy(()=>import('./views/Company/ViewCompany/ViewCompany'));
const EditCompany = React.lazy(()=>import('./views/Company/EditCompany/EditCompany'));
const EditCompanyDetails = React.lazy(()=>import('./views/Company/EditCompany/EditCompanyDetails'));
const AddCompany = React.lazy(()=>import('./views/Company/AddCompany/AddCompany'));
const ViewVehicleData = React.lazy(()=>import('./views/Vehicles/ViewVehicle/ViewVehicleData'));
const ViewCompanyDetails = React.lazy(()=>import('./views/Company/ViewCompany/ViewCompanyDetails'));

const StaffHome = React.lazy(()=>import('./views/Home/StaffHome/StaffHome'));
const SuperAdminHome = React.lazy(()=>import('./views/Home/SuperAdminHome/SuperAdminHome'));
const TransportManagerHome = React.lazy(()=>import('./views/Home/TransportManegerHome/TransportManagerHome'));
////////////////////////////Required Sample Pages///////////////////////
// const Company




// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  {path: '/home/:3', name:'StaffHome', component:StaffHome},
  {path:'/home/:1', name:'SuperAdminHome', component:SuperAdminHome},
  {path:'/home/:2', name:'TransportManagerHome', component:TransportManagerHome},
  { path: '/about', name: 'About', component: About},
  { path: '/contact', name: 'Contact', component: Contact },
  {path: '/setting', name: 'Setting', component:Setting},
  {path: '/profile', name: 'Profile', component:Profile},
  {path: '/profile-edit', name: 'ProfileEdit', component:ProfileEdit},
  // { path: '/theme', exact: true, name: 'Theme', component: Colors },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', exact: true, name: 'Base', component: Cards },
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/forms', name: 'Forms', component: Forms },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },



  { path: '/reports/monthly-reports', name: 'MonthlyReport', component: MonthlyReport },
  { path: '/reports/daily-reports', name: 'MonthlyReport', component: DailyReport },
  { path: '/reports/weekly-reports', name: 'MonthlyReport', component: WeeklyReport },
  { path: '/locations/live-location', name: 'LiveLocation', component: LiveLocation },
  { path: '/locations/previous-location', name: 'PreviousLocation', component: PreviousLocation },
  { path: '/locations/previous-paths', name: 'PreviousPaths', component: PreviousPaths },

  { path: '/vehicles/add-vehicle', name: 'AddVehicle', component: AddVehicle},
  { path: '/vehicles/edit-vehicle', name: 'EditVehicle', component: EditVehicle},
  { path: '/vehicles/view-vehicle', name: 'ViewVehicle', component: ViewVehicle},
  {path: '/vehicles/details/:id', name: 'EditVehicleDetails', component:EditVehicleDetails},
  {path: '/vehicles/details2/:id', name: 'ViewVehicleData', component:ViewVehicleData},

  { path: '/company/edit-company', name:'EditCompany', component: EditCompany},
  { path: '/company/view-company', name:'ViewCompany', component: ViewCompany},
  { path: '/company/add-company', name:'AddCompany', component: AddCompany},
  { path: '/company/details/:id', name:'EditCompanyDetails', component: EditCompanyDetails},
  { path:'/company/details2/:id', name:'ViewCompanyDetails', component:ViewCompanyDetails},




  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  // { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  // { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User },
  ////////////////sample Required Pages//////////////////////////////////




];

export default routes;
