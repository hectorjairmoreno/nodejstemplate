const express = require("express");
const app = express();

app.use(express.static("build"));

app.get("/userInfo", (req, res) => {
  res.send({
    name: "Jason",
    lastName: "Johnson",
    age: 19,
  });
});

app.put("/userUpdate", (req, res) => {
  res.send({
    message: "User Updated",
  });
});

app.post("/userPost", (req, res) => {
  res.send({
    message: "User Added!",
  });
});

app.delete("/userDelete", (req, res) => {
  res.send({
    message: "User Deleted!",
  });
});

app.listen(3000, () => {
  console.log("listenting");
});
