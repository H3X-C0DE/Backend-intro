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

// process.on("uncaughtException", (err, origin) => {
//     fs.write.sync(
//       process.stderr.fd,
//       `Caught exception: ${err}\n` + `Exception origin: ${origin}`
//     );
//   });
// fs.writeFile(
//   path.join(__dirname, "./files", "greeting.txt"),
//   "Pissing all by your self there handsome",
//   (err) => {
//     if (err) throw err;
//     console.log("Writing done");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "./files", "appended/append"),
//   "This is just appended text",
//   (err) => {
//     if (err) throw err;
//     console.log("Appending done");
//   }
// );

// const fileOps = async () => {
//     try {
//        const data = await fsPromises.readFile(path.join (__dirname, "starter.text"), "utf8");
//        console.log(data)
//     } catch (err) {
//         console.log(err);
//     }
// }
const data = await fsPromises.readFile(
  path.join(__dirname, "starter.txt"),
  "utf8"
);
console.log(data);
await fsPromises.unlink(path.join(__dirname, "starter.txt"));
await fsPromises.writeFile(path.join(__dirname, "promiseWrite.txt"), data);
await fsPromises.appendFile(
  path.join(__dirname, "promiseWrite.txt"),
  "This has been added"
);
await fsPromises.rename(
  path.join(__dirname, "promiseWrite.txt"),
  path.join(__dirname, "newFileName.txt")
);

const newData = await fsPromises.readFile(
  path.join(__dirname, "newFileName.txt"),
  "utf8"
);
console.log(newData);
