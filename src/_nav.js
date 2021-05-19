



export default {
  items: [
    {
      name: 'Dashboard',
      url: '/super-admin-home',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'Live',
      },
    },
    {
      name: 'Home',
      url: '/dashboard',
      icon: 'fa fa-home',
    },
    {
      name: 'Locations',
      url: '/locations',
      icon: 'fa fa-location-arrow',
      children: [
        {
          name: 'Live Location',
          url: '/locations/live-location',
          icon: 'fa fa-location-arrow',
        },
        {
          name: 'Previous Location',
          url: '/locations/previous-location',
          icon: 'fa fa-location-arrow',
        },
        {
          name: 'Previous Paths',
          url: '/locations/previous-paths',
          icon: 'fa fa-location-arrow',
        }
      ]
    },

    {
      name: 'Vehicles',
      url: '/vehicles',
      icon: 'fa fa-car',
      children: [
        {
          name: 'Add Vehicle',
          url: '/vehicles/add-vehicle',
          icon: 'fa fa-car',
        },
        {
          name: 'Edit vehicle',
          url: '/vehicles/edit-vehicle',
          icon: 'fa fa-car',
        },
        {
          name: 'View vehicles',
          url: '/vehicles/view-vehicle',
          icon: 'fa fa-car',
        }
      ]
    },

    {
      name: 'Company',
      url: '/company/',
      icon: 'fa fa-building',
      children: [
        {
          name: 'Add Company',
          url: '/company/add-company',
          icon: 'fa fa-building'
        },
        {
          name: 'View Company Details',
          url: '/company/view-company',
          icon: 'fa fa-building',
        },
        {
          name: 'Edit Company Details',
          url: '/company/edit-company',
          icon: 'fa fa-building',
        }
      ]
    },
    {
      name: 'Data',
      url: '/data',
      icon: 'fa fa-database',
    },

    {
      name: 'About',
      url: '/about',
      icon: 'fa fa-info-circle',
    },

    {
      name: 'Contact',
      url: '/contact',
      icon: 'fa fa-phone',
    },

    {
      name: 'EMRI',
      url: '/emri',
      icon: 'fa fa-warning ',
    },

    {
      name: 'Logout',
      url: '/logout',
      icon: 'fa fa-sign-out',
    }
  ],
}

