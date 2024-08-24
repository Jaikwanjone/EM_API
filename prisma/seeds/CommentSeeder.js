const { faker, da } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const CommentSeeder = async () => {
  const data = [];

  for (let i = 0; i < 40; i++) {
    const content = faker.lorem.paragraph();
    const userId = faker.number.int({ min: 1, max: 10 });
    const postId = faker.number.int({ min: 1, max: 20 });

    data.push({ content, userId, postId });
  }

  console.log("Comment Seeding started");
  await prisma.comment.createMany({ data });
  console.log("Comment seeding done");
};

module.exports = { CommentSeeder };
