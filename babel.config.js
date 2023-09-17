module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "18" } }],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@infra": "./src/infra",
          "@domain": "./src/domain",
        },
      },
    ],
    "@babel/plugin-proposal-class-properties",
  ],
};
