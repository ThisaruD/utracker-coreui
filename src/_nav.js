export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'Live',
      },
    },

    {
      name: 'Home',
      url: '/home:id',
      icon: 'icon-puzzle',
    },

    {
      name: 'Reports',
      url: '/reports',
      icon: 'icon-puzzle',
      children: [
        {
          name:'Daily Report',
          url:'/reports/daily-reports',
          icon:'icon-puzzle',
        },
        {
          name:'Weekly Report',
          url:'/reports/weekly-reports',
          icon:'icon-puzzle',
        },
        {
          name:'Monthly Report',
          url:'/reports/monthly-reports',
          icon:'icon-puzzle',
        },
      ],
    },

    {
      name: 'Locations',
      url: '/locations',
      icon: 'icon-puzzle',
      children: [
        {
          name:'Live Location',
          url:'/locations/live-location',
          icon:'icon-puzzle',
        },
        {
          name:'Previous Location',
          url:'/locations/previous-location',
          icon:'icon-puzzle',
        },
        {
          name:'Previous Paths',
          url:'/locations/previous-paths',
          icon:'icon-puzzle',
        }
      ]
    },

    {
      name: 'Vehicles',
      url: '/vehicles',
      icon: 'icon-puzzle',
      children: [
        {
          name:'Add Vehicle',
          url:'/vehicles/add-vehicle',
          icon:'icon-puzzle',
        },
        {
          name:'Edit vehicle',
          url:'/vehicles/edit-vehicle',
          icon:'icon-puzzle',
        },
        {
          name:'View vehicles',
          url:'/vehicles/view-vehicle',
          icon:'icon-puzzle',
        }
      ]
    },

    {
      name: 'Company',
      url:'/company/',
      icon: 'icon-puzzle',
      children: [
        {
          name:'Add Company',
          url:'/company/add-company',
          icon:'icon-puzzle'
        },
        {
          name:'View Company Details',
          url:'/company/view-company',
          icon:'icon-puzzle',
        },
        {
          name:'Edit Company Details',
          url:'/company/edit-company',
          icon:'icon-puzzle',
        }
        ]
    },
    {
      name: 'Data',
      url: '/data',
      icon: 'icon-puzzle',
    },

    {
      name: 'About',
      url: '/about',
      icon: 'icon-puzzle',
    },

    {
      name: 'Contact',
      url: '/contact',
      icon: 'icon-puzzle',
    },

    {
      name: 'EMRI',
      url: '/emri',
      icon: 'icon-puzzle',
    },

    {
      name: 'Logout',
      url: '/logout',
      icon: 'icon-puzzle',
    },
    {
      name: 'Required pages',
      url: '',
      icon:'icon-puzzle'
    }
    ],
};
