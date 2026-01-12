"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({});
async function main() {
    console.log('🌱 Seeding database...');
    const superAdminRole = await prisma.role.upsert({
        where: { code: 'sc_admin' },
        update: {},
        create: {
            name: 'superadmin',
            code: 'sc_admin',
            description: 'System Root Access',
            status: true,
        },
    });
    console.log(`✅ Created Role: ${superAdminRole.code}`);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map