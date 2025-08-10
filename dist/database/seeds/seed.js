"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seed_module_1 = require("./seed.module");
const seed_service_1 = require("./seed.service");
async function seed() {
    const app = await core_1.NestFactory.createApplicationContext(seed_module_1.SeedModule);
    try {
        const seedService = app.get(seed_service_1.SeedService);
        await seedService.seed();
        console.log('Database seeded successfully');
    }
    catch (error) {
        console.error('Error seeding database:', error);
    }
    finally {
        await app.close();
    }
}
seed();
//# sourceMappingURL=seed.js.map