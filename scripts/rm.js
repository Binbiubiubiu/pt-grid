const fs = require("fs-extra");
const path = require("path");

// remove unnecessary file
const dirs = fs.readdirSync(path.join(__dirname, "../es"));

dirs.forEach((item) => {
  if (item.includes("app.") || item.includes("DS_Store") || item.includes("example")) {
    fs.removeSync(path.join(__dirname, "../es/", item));
  }
});

fs.removeSync(path.join(__dirname, "../lib/"));
