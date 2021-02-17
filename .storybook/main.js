const path = require('path');
const fixBabelImports = require('customize-cra').fixBabelImports;
const CracoLessPlugin = require('craco-less');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.tsx'],
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
    {
      name: '@storybook/preset-ant-design',
      plugin: CracoLessPlugin,
      options: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#f99d3a',
            'body-background': '#f7fafc',
            'border-radius-base': '6px',
          },
        },
      },
    },
  ],
};
