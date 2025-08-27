import withTM from 'next-transpile-modules';

const withTMConfig = withTM([
  'rc-motion',
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
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: 'loose' },
};

export default withTMConfig(nextConfig);
