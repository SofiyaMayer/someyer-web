import { prisma } from '@/utilities/prisma'

import { afterAll, describe, expect, it } from 'vitest'

describe('Prisma', () => {
  afterAll(async () => {
    await prisma.$disconnect()
  })

  it('queries the database', async () => {
    const rows = await prisma.$queryRaw<{ ok: number }[]>`SELECT 1 AS ok`

    expect(rows).toEqual([{ ok: 1 }])
  })

  it('owns the app schema, separate from Payload', async () => {
    const rows = await prisma.$queryRaw<{ exists: boolean }[]>`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.tables
        WHERE table_schema = 'app' AND table_name = '_prisma_migrations'
      ) AS exists`

    expect(rows).toEqual([{ exists: true }])
  })
})
