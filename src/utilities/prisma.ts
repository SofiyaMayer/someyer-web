import { PrismaPg } from '@prisma/adapter-pg'

import { PrismaClient } from '@/generated/prisma/client'

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient }

const createPrismaClient = () =>
  new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  })

export const prisma = globalForPrisma.prisma ?? createPrismaClient()

// Next dev re-evaluates modules on every edit; without this each reload opens another connection pool
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
