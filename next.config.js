/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  resolve: {
    alias: {
      "pixi.js": "pixi.js-legacy",
    },
  },
};
