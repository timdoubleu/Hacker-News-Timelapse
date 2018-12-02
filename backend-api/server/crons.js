import HapiCron from 'hapi-cron';

export default [
  {
    plugin: HapiCron,
    options: {
      jobs: [{
        name: 'testcron',
        time: '0 */15 * * * *',
        timezone: 'Etc/UTC',
        request: {
          method: 'GET',
          url: '/cron'
        },
        onComplete: () => {
          console.info('hapi cron has run', new Date().getTime());
        }
      }]
    }
  }
];
