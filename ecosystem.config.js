module.exports = {
  apps: [
    {
      name: 'kangaroo',
      script: 'dist/main.js',

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],

  deploy: {
    production: {
      user: 'backend',
      host: '112.74.201.109',
      ref: 'origin/master',
      repo: 'https://github.com/Barretem/kangaroo-library-center.git',
      path: '/home/backend/kangaroo',
      'post-deploy':
        'cd /home/backend/kangaroo/source && cp /home/backend/kangaroo/production.env /home/backend/kangaroo/source/production.env && echo $PWD && yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    },
  },
};
