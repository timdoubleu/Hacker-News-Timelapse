import * as main           from '../controllers/main';


export default [
  {
    method: 'GET', path: '/',
    handler: () => ({
      test: [
        '/test',
        '/articles',
      ]
    })
  },

  // {
  //   method: 'GET', path: '/test/cron',
  //   handler: main.runCron,
  // },

  {
    method: 'GET', path: '/cron',
    handler: main.maintainData,
    // options: {
    //   auth: {
    //     mode: 'required',
    //     strategy: 'simple',
    //   }
    // }
  },

  {
    method: 'GET', path: '/interval/{interval}',
    handler: main.getArticles,
    // options: {
    //   auth: 'simple',
    // }
  },

  {
    method: 'GET', path: '/articles',
    handler: main.getLists,
    // options: {
    //   auth: 'simple',
    // }
  },

  {
    method: 'DELETE', path: '/',
    handler: main.nukeItAll,
    // options: {
    //   auth: 'simple',
    // }
  },
];
