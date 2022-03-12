/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  resolve: {
    alias: {
      "pixi.js": "pixi.js-legacy",
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
