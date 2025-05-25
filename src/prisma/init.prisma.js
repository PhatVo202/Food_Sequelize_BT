import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

try {
  await prisma.$queryRaw`Select 1+1 as result`;
  console.log("Prisma success");
} catch (error) {
  console.error("Prisma fail");
}

export default prisma;
