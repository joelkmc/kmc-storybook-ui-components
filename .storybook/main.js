const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        craOverrides: {
          fileLoaderExcludes: ['less'],
        },
      },
    },
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
  ],
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  '@primary-color': '#f99d3a',
                  'body-background': '#f7fafc',
                  'border-radius-base': '3px',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
        include: path.resolve(__dirname, '../src/'),
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
            },
          },
          require.resolve('react-docgen-typescript-loader'),
        ],
      },
    ]),
      config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
