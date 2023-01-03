const fs = require("fs");
const path = require("path");
// fs.readFile(
//   path.join(__dirname, "./files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

fs.writeFile(
  path.join(__dirname, "./files", "greeting.txt"),
  "Pissing all by your self there handsome",
  (err) => {
    if (err) throw err;
    console.log("Writing done");
  }
);

process.on("uncaughtException", (err, origin) => {
  fs.write.sync(
    process.stderr.fd,
    `Caught exception: ${err}\n` + `Exception origin: ${origin}`
  );
});
