import 'dotenv/config'
import { defineConfig } from 'prisma/config'

// Without it Prisma Migrate treats `public` (Payload's tables) as its own schema:
// it refuses to run on the "non-empty" database and would put _prisma_migrations there.
function inAppSchema(databaseUrl: string | undefined): string | undefined {
  if (!databaseUrl) return undefined
  const url = new URL(databaseUrl)
  url.searchParams.set('schema', 'app')
  return url.toString()
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: inAppSchema(process.env.DATABASE_URL),
  },
})
