/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    target: "server",
};

module.exports = withContentlayer({ ...nextConfig });
