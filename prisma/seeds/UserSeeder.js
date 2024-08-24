const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const UserSeeder = async () => {
  const password = await bcrypt.hash("password", 10);
  console.log("User seeding are started");

  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const name = `${firstName} ${lastName}`;
    const username = `${firstName}${lastName[0]}`.toLocaleLowerCase();
    const bio = faker.person.bio();

    await prisma.user.upsert({
      where: { username },
      update: {},
      create: { name, username, bio, password },
    });

    console.log("User seeding done");
  }
  console.log("User seeding are started");

  for (let i = 0; i < 10; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    const name = `${firstName} ${lastName}`;
    const username = `${firstName}${lastName[0]}`.toLocaleLowerCase();
    const bio = faker.person.bio();

    await prisma.user.upsert({
      where: { username },
      update: {},
      create: { name, username, bio, password },
    });

    console.log("User seeding done");
  }
};
module.exports = { UserSeeder };
