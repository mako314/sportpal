// import { webpack } from 'next/dist/compiled/webpack/webpack';
// import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig  = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }]
        });
        return config;
    },
};

export default nextConfig;

// export default defineNextConfig({
//     reactStrictMode: true,
//     swcMinify: true,

//     webpack(config) {
//         config.module.rules.push({
//             test: /\.svg$/,
//             use:[{loader: '@svgr/webpack', options: {icon: true}}]
//         })
//         return config
//     },
// })
