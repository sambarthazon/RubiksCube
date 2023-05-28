window.onload = function () {
  document.getElementById("generate").onclick = function () {
    const { exec } = require("node:child_process");
    exec("../../bin/executable", (error, stdout, stderr) =>
      console.log(error, stdout, stderr)
    );
  };
};
