import bcrypt from "bcryptjs";
import prisma from "../src/config/prisma.js";

const email = process.env.ADMIN_EMAIL || "admin@cadetutatu.com";
const password = process.env.ADMIN_PASSWORD || "admin123";

async function main() {
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.admin.upsert({
    where: { email },
    update: {},
    create: {
      name: "Administrador",
      email,
      password: hashedPassword,
    },
  });

  console.log(`Administrador disponivel: ${email}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
