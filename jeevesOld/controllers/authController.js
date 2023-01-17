const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res.status(400).json({ message: "Username and password required" });
  // console.log(usersDB.users);
  // console.log(user);
  const foundUser = usersDB.users.find((person) => person.userName === user);

  if (!foundUser) {
    console.log("username failed");
    // console.log(user);
    // console.log(foundUser);
    return res.sendStatus(401);
  }

  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    res.json({ success: `User ${user} logged in` });
  } else {
    console.log("password failed");
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };
