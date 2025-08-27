const withTM = require('next-transpile-modules')(['rc-motion', 
  'rc-util',
  'rc-field-form',
  'rc-dialog',
  'rc-select',
  'rc-pagination',
  'rc-picker',
  '@ant-design/icons',
  '@ant-design/icons-svg',
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
  experimental: { esmExternals: 'loose' },
});
