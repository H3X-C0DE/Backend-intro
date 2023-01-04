const fs = require("fs");
if (!fs.existsSync("./new")) {
  fs.mkdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory created");
  });
}
if (fs.existsSync("./new")) {
  fs.rmdir("./new", (err) => {
    if (err) throw err;
    console.log("Directory removed");
  });
}

const rs = fs.createReadStream("loremIpsum.txt", { encoding: "utf8" });
const ws = fs.createWriteStream("new-lorem.txt");
rs.pipe(ws);
