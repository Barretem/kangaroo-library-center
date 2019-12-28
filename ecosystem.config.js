module.exports = {
  apps: [
    {
      name: 'kangaroo',
      script: './build.sh',

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
      user: 'root',
      host: '112.74.201.109',
      ref: 'origin/master',
      repo: 'https://github.com/Barretem/kangaroo-library-center.git',
      path: '/home/backend/kangaroo',
      'post-deploy':
        'pm2 reload ecosystem.config.js --env production',
    },
  },
};
