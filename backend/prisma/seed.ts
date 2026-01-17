// // prisma/seed.ts
// import { PrismaClient } from '@prisma/client';

// // Change this line from "new PrismaClient()" to:
// const prisma = new PrismaClient({});

// async function main() {
//     console.log('🌱 Seeding database...');

//     const superAdminRole = await prisma.role.upsert({
//         where: { code: 'sc_admin' },
//         update: {},
//         create: {
//             name: 'superadmin',
//             code: 'sc_admin',
//             description: 'System Root Access',
//             status: true,
//         },
//     });

//     console.log(`✅ Created Role: ${superAdminRole.code}`);
// }

// main()
//     .catch((e) => {
//         console.error(e);
//         process.exit(1);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });