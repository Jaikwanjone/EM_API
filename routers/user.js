const express = require("express");
const router = express.Router();
const prisam = require("../prismaClient");
const bcrypt = require("bcrypt");

router.get("/users", async (req, res) => {
  const data = await prisam.user.findMany({
    include: { comment: true, posts: true },
    orderBy: { id: "desc" },
    take: 20,
  });
  res.json(data);
});

router.get("/users/:id ", async (req, res) => {
  const { id } = req.params;
  const data = await prisam.user.findFirst({
    where: { id: Number(id) },
    include: { posts: true, comment: true },
  });

  res.json(data);
});

router.post("/users", async (req, res) => {
  const { name, password, username, bio } = req.body;
  if (!name || !password || !username || !bio) {
    return res.status(400).json({ msg: "Inputs are required" });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await prisam.user.create({
    data: { name, password: hash, username },
  });
  res.json(user);
});

module.exports = { userRouter: router };
