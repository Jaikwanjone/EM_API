const { PrismaClient } = require("@prisma/client");
const { UserSeeder } = require("./UserSeeder");
const { PostSeeder } = require("./PostSeeder");
const { CommentSeeder } = require("./CommentSeeder");

const prisma = new PrismaClient();

const main = async () => {
  try {
    await UserSeeder();
    console.log("User");
    await PostSeeder();
    console.log("Post");
    await CommentSeeder();
    console.log("Comment");
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

main();
