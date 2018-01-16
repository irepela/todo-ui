const path = require("path");

module.exports = {
  entry: "./server/app.ts",
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    path: path.join(__dirname, "../dist/server"),
    filename: "app.js"
  },
  resolve: {
    extensions: ["*", ".ts", ".js"]
  }
};
