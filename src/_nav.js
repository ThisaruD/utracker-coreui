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
      url: '/home',
      icon: 'icon-puzzle',
    },

    {
      name: 'Reports',
      url: '/reports',
      icon: 'icon-puzzle',
      children: [
        {
          name:'DailyReport',
          url:'/reports/daily-reports',
          icon:'icon-puzzle',
        },
        {
          name:'WeeklyReport',
          url:'/reports/weekly-reports',
          icon:'icon-puzzle',
        },
        {
          name:'MonthlyReport',
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
          name:'LiveLocation',
          url:'/locations/live-location',
          icon:'icon-puzzle',
        },
        {
          name:'PreviousLocation',
          url:'/locations/previous-location',
          icon:'icon-puzzle',
        },
        {
          name:'PreviousPaths',
          url:'/locations/previous-paths',
          icon:'icon-puzzle',
        }
      ]
    },

    {
      name: 'Devices',
      url: '/devices',
      icon: 'icon-puzzle',
      children: [
        {
          name:'AddDevice',
          url:'/devices/add-device',
          icon:'icon-puzzle',
        },
        {
          name:'EditDevice',
          url:'/devices/edit-device',
          icon:'icon-puzzle',
        },
        {
          name:'ViewDevice',
          url:'/devices/view-device',
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
    }
    ],
};
